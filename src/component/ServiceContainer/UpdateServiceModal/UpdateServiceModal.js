import {
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { modalUpdateServiceState$ } from "../../../redux/selectors/ModalSelector";
import "./UpdateServiceModal.scss";
import { hideModalUpdate } from "../../../redux/actions/ModalAction";
import * as actions from "../../../redux/actions/ServiceManageAction";
import { serviceItemManageState$ } from "../../../redux/selectors/ServiceManageSelector";
export default function UpdateServiceModal() {
  const dispatch = useDispatch();
  const isShow = useSelector(modalUpdateServiceState$);
  const serviceInfo = useSelector(serviceItemManageState$);
  const getCurrentDate = () => {
    let showDate = new Date();
    let displayDate =
      showDate.getDate() +
      "/" +
      (showDate.getMonth() + 1) +
      "/" +
      showDate.getFullYear();
    return displayDate;
  };
  useEffect(() => {
    setDataService({
      id: serviceInfo.id,
      name: serviceInfo.name,
      price: serviceInfo.price,
      majorGroup: serviceInfo.majorGroup,
      description: serviceInfo.description,
      createDate: serviceInfo.createDate,
      createBy: serviceInfo.createBy,
      updateDate: getCurrentDate(),
      updateBy: "hongson2992000",
      status: serviceInfo.status,
      serviceCategory_Id: serviceInfo.serviceCategory_Id,
    });
  }, [
    serviceInfo.id,
    serviceInfo.name,
    serviceInfo.price,
    serviceInfo.majorGroup,
    serviceInfo.description,
    serviceInfo.createDate,
    serviceInfo.createBy,
    serviceInfo.status,
    serviceInfo.serviceCategory_Id,
  ]);
  const [dataService, setDataService] = useState({
    id: serviceInfo.id,
    name: serviceInfo.name,
    price: serviceInfo.price,
    majorGroup: serviceInfo.majorGroup,
    description: serviceInfo.description,
    createDate: serviceInfo.createDate,
    createBy: serviceInfo.createBy,
    updateDate: getCurrentDate(),
    updateBy: "hongson2992000",
    status: serviceInfo.status,
    serviceCategory_Id: serviceInfo.serviceCategory_Id,
  });

  const onClose = useCallback(() => {
    dispatch(hideModalUpdate());
    //
  }, [dispatch]);
  const renderMajorGroup = () => {
    if (formik.values.serviceCategory_Id === 1) {
      return (
        <Select
          className="title"
          required
          id="majorGroup"
          name="majorGroup"
          value={formik.values.majorGroup}
          onChange={formik.handleChange}
        >
          <MenuItem value={"appetizer"}>Khai v???</MenuItem>
          <MenuItem value={"main_dishes"}>M??n ch??nh</MenuItem>
          <MenuItem value={"dessert"}>Tr??ng mi???ng</MenuItem>
        </Select>
      );
    } else if (formik.values.serviceCategory_Id === 2) {
      return (
        <Select
          className="title"
          required
          id="majorGroup"
          name="majorGroup"
          value={formik.values.majorGroup}
          onChange={formik.handleChange}
        >
          <MenuItem value={"coffee"}>C?? ph??</MenuItem>
          <MenuItem value={"tea"}>Tr??</MenuItem>
          <MenuItem value={"water_and_soft_drink"}>N?????c gi???i kh??t</MenuItem>
          <MenuItem value={"mocktails"}>MockTail</MenuItem>
          <MenuItem value={"beer"}>Bia</MenuItem>
        </Select>
      );
    }
  };
  const onSubmitService = useCallback(
    (values) => {
      dispatch(actions.updateHotelService.updateHotelServiceRequest(values));
      dispatch(hideModalUpdate());
    },
    [dispatch]
  );
  const formik = useFormik({
    initialValues: dataService,
    onSubmit: (values, { resetForm }) => {
      onSubmitService(values);
      resetForm({ values: "" });
    },
    enableReinitialize: true,
  });
  const body = (
    <div className="paperUpdate" id="simple-modal-title">
      <h2>Ch???nh s???a d???ch v???</h2>
      <hr />
      <form
        noValidate
        autoComplete="off"
        className="form col-12"
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <div className="row">
          <div className="col-6">
            <InputLabel>T??n d???ch v???</InputLabel>
            <TextField
              className="title"
              required
              id="name"
              name="name"
              value={formik.values.name || ""}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-6">
            <InputLabel>Gi??</InputLabel>
            <TextField
              type={"number"}
              className="title"
              required
              id="price"
              name="price"
              value={formik.values.price || ""}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-6">
            <InputLabel>Nh??m d???ch v???</InputLabel>
            <Select
              className="title"
              required
              id="serviceCategory_Id"
              name="serviceCategory_Id"
              value={formik.values.serviceCategory_Id || ""}
              onChange={formik.handleChange}
            >
              <MenuItem value={1}>Th???c ??n</MenuItem>
              <MenuItem value={2}>????? u???ng</MenuItem>
            </Select>
          </div>
          <div className="col-6">
            <InputLabel>Nh??m</InputLabel>
            {renderMajorGroup()}
          </div>
          <div className="col-12">
            <InputLabel>Th??ng tin m?? t???</InputLabel>
            <TextareaAutosize
              className="title"
              minRows={5}
              maxRows={10}
              id="description"
              name="description"
              value={formik.values.description || ""}
              onChange={formik.handleChange}
            />
          </div>
          <div className="InfoCreate col-12">
            <div className="row">
              <div className="col-6">
                <InputLabel>Ng??y t???o</InputLabel>
                <TextField
                  className="title"
                  required
                  id="createDate"
                  name="createDate"
                  value={formik.values.createDate || ""}
                  onChange={formik.handleChange}
                  disabled
                />
              </div>
              <div className="col-6">
                <InputLabel>Ng?????i t???o</InputLabel>
                <TextField
                  className="title"
                  required
                  id="createBy"
                  name="createBy"
                  value={formik.values.createBy || ""}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-6">
                <InputLabel>Ng??y c???p nh???t</InputLabel>
                <TextField
                  className="title"
                  required
                  id="updateDate"
                  name="updateDate"
                  value={formik.values.updateDate || ""}
                  onChange={formik.handleChange}
                  disabled
                />
              </div>
              <div className="col-6">
                <InputLabel>Ng?????i c???p nh???t</InputLabel>
                <TextField
                  className="title"
                  required
                  id="updateBy"
                  name="updateBy"
                  value={formik.values.updateBy || ""}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="buttonSave" type="submit">
              L??u
            </button>
            <button className="buttonClose" type="reset" onClick={onClose}>
              ????ng
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
