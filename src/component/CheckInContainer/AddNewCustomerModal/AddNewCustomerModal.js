import { InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { modalAddUserState$ } from "../../../redux/selectors/ModalSelector";
import "./AddNewCustomerModal.scss";
import { hideModalAddUser } from "../../../redux/actions/ModalAction";
import * as actions from "../../../redux/actions/BookingManageAction";
import { useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../../../utils/constants/settingSystem";
import { userState$ } from "../../../redux/selectors/UserSelector";
import moment from "moment";
import { infoUserBookingState$ } from "../../../redux/selectors/BookingManageSelector";
export default function AddNewCustomerModal() {
  const dispatch = useDispatch();
  const isShow = useSelector(modalAddUserState$);
  const navigate = useNavigate();
  const infoUser = useSelector(userState$);
  const listCustomer = useSelector(infoUserBookingState$);
  const renderListCustomerAvailability = () => {
    let newList = listCustomer.filter((item) => item.primary === true);
    return newList;
  };
  const onClose = useCallback(() => {
    dispatch(hideModalAddUser());
  }, [dispatch]);
  // let dataService = formik.values
  const onSubmitInfoUser = useCallback(
    (values) => {
      let arrDate = values.birthDate.split("-");
      let formatedDate = arrDate[2] + "/" + arrDate[1] + "/" + arrDate[0];
      let infoUserCheckIn = {
        id: values.id,
        birthDate: formatedDate,
        createBy: values.createBy,
        createDate: values.createDate,
        email: values.email,
        firstName: values.firstName,
        gender: 1,
        phoneNumber: values.phoneNumber,
        lastName: values.lastName,
        middleName: values.middleName,
        passportNo: values.passportNo,
        idNo: values.idNo,
        updateDate: values.updateDate,
        lastModifyBy: values.lastModifyBy,
        primary: values.primary,
      };
      dispatch(
        actions.addNewUserBooking.addNewUserBookingRequest(infoUserCheckIn)
      );
      dispatch(hideModalAddUser());
      // navigate("/checkIn");
    },
    [dispatch]
  );
  const renderIdRandom = () => {
    let id = new Date().getTime();
    setId(id);
    return id;
  };
  let [id, setId] = useState(new Date().getTime());
  let currentDate = moment().format("DD/MM/YYYY");
  const formik = useFormik({
    initialValues: {
      id: id,
      birthDate: "",
      createBy:
        infoUser.firstName +
        " " +
        infoUser.middleName +
        " " +
        infoUser.lastName,
      createDate: currentDate,
      email: "",
      firstName: "",
      gender: 1,
      phoneNumber: "",
      lastName: "",
      middleName: "",
      passportNo: "",
      idNo: "",
      updateDate: currentDate,
      lastModifyBy:
        infoUser.firstName +
        " " +
        infoUser.middleName +
        " " +
        infoUser.lastName,
      primary: false,
    },
    onSubmit: (values, { resetForm }) => {
      onSubmitInfoUser(values);
      resetForm({ values: "" });
      renderIdRandom();
    },
    enableReinitialize: true,
  });
  console.log(formik.values);
  const body = (
    <div className="paperAddNewService" id="simple-modal-title">
      <h2>Th??m kh??ch</h2>
      <hr />
      <form
        noValidate
        autoComplete="off"
        className="form col-12"
        onSubmit={formik.handleSubmit}
      >
        <div className="row">
          <div className="col-12 simpleModalItem">
            <div className="row">
              <div className="col-4">
                <InputLabel>H???</InputLabel>
                <TextField
                  className="title"
                  required
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName || ""}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-4">
                <InputLabel>T??n L??t</InputLabel>
                <TextField
                  className="title"
                  required
                  id="middleName"
                  name="middleName"
                  value={formik.values.middleName || ""}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-4">
                <InputLabel>T??n</InputLabel>
                <TextField
                  className="title"
                  required
                  id="lastName"
                  name="lastName"
                  value={formik.values.lastName || ""}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-6 simpleModalItem">
            <InputLabel>S??? ??i???n tho???i</InputLabel>
            <TextField
              type={"number"}
              className="title"
              required
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber || ""}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-6 simpleModalItem">
            <InputLabel>Email</InputLabel>
            <TextField
              className="title"
              required
              id="email"
              name="email"
              value={formik.values.email || ""}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-6 simpleModalItem">
            <InputLabel>S??? H??? Chi???u/CCCD</InputLabel>
            <TextField
              className="title"
              type="number"
              required
              id="idNo"
              name="idNo"
              value={formik.values.idNo || ""}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-6 simpleModalItem">
            <InputLabel>Gi???i T??nh</InputLabel>
            <Select
              className="title"
              required
              id="gender"
              name="gender"
              value={formik.values.gender || ""}
              onChange={formik.handleChange}
            >
              <MenuItem value={1}>Nam</MenuItem>
              <MenuItem value={0}>N???</MenuItem>
            </Select>
          </div>
          <div className="col-6 simpleModalItem">
            <InputLabel>Ng??y Sinh</InputLabel>
            <TextField
              className="title"
              required
              type="date"
              id="birthDate"
              name="birthDate"
              value={formik.values.birthDate || ""}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-6 simpleModalItem">
            <InputLabel>Ng?????i ?????i Di???n</InputLabel>
            {renderListCustomerAvailability().length !== 0 ? (
              <Select
                className="title"
                disabled
                required
                id="primary"
                name="primary"
                value={formik.values.primary || ""}
                onChange={formik.handleChange}
              >
                <MenuItem value={true}>Ng?????i ?????i Di???n</MenuItem>
                <MenuItem value={false}>Ng?????i Th?????ng</MenuItem>
              </Select>
            ) : (
              <Select
                className="title"
                required
                id="primary"
                name="primary"
                value={formik.values.primary || ""}
                onChange={formik.handleChange}
              >
                <MenuItem value={true}>Ng?????i ?????i Di???n</MenuItem>
                <MenuItem value={false}>Ng?????i Th?????ng</MenuItem>
              </Select>
            )}
          </div>
          <div className="footer">
            <button className="buttonSave" type="submit">
              L??u
            </button>
            <button className="buttonClose" onClick={onClose}>
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
