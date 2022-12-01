import { InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import classNames from "classnames";
import { useFormik } from "formik";
import moment from "moment/moment";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { hideCreateAccountModel } from "../../../redux/actions/ModalAction";
import { modelCreateAccountState$ } from "../../../redux/selectors/ModalSelector";
import { PHONE_VALID } from "../../../utils/constants/settingSystem";
import Styles from "./CreateAccountModel.module.scss";

const CreateAccountModel = () => {
  const dispatch = useDispatch();
  const isShow = useSelector(modelCreateAccountState$);

  const onClose = useCallback(() => {
    dispatch(hideCreateAccountModel());
  }, [dispatch]);

  const handleAddAccount = useCallback((values) => {}, []);

  const SignupSchema = yup.object().shape({
    phoneNumber: yup.string().matches(PHONE_VALID, "Phone incorrect"),
  });

  const mockRole = [
    {
      id: 2,
      name: "ROLE_MANAGER",
    },
    {
      id: 3,
      name: "ROLE_RECEPTIONIST",
    },
    {
      id: 4,
      name: "ROLE_HOUSEKEEPING",
    },
    {
      id: 5,
      name: "ROLE_FOOD_AND_BEVERAGE",
    },
  ];

  const formik = useFormik({
    initialValues: {
      id: 0,
      userName: "",
      password: "",
      firstName: "",
      middleName: "",
      lastName: "",
      gender: false,
      phoneNumber: "",
      dateOfBirth: "",
      role: mockRole[0].id,
      isActive: true,
      hotelId: 1,
      createDate: moment(new Date()).format("DD/MM/yyyy HH:mm:ss"),
      createBy: "",
      updateDate: "",
      updateBy: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleAddAccount(values);
      resetForm({ values: "" });
    },
    validationSchema: { SignupSchema },
  });

  const body = (
    <div className={Styles.paper} id="simple-modal-title">
      <h2>Thêm mới Tài Khoản</h2>
      <hr />
      <form
        noValidate
        autoComplete="off"
        className={classNames("col-12", Styles.form)}
        onSubmit={formik.handleSubmit}
      >
        <div className="row">
          <div className="col-12">
            <InputLabel>Tài Khoản</InputLabel>
            <TextField
              className={classNames("col-12", Styles.title)}
              required
              id="userName"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-12">
            <InputLabel>Mật Khẩu</InputLabel>
            <TextField
              type={"password"}
              className={classNames("col-12", Styles.title)}
              required
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-4">
            <InputLabel>Họ</InputLabel>
            <TextField
              className={Styles.title}
              required
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-4">
            <InputLabel>Tên Lót</InputLabel>
            <TextField
              className={Styles.title}
              id="middleName"
              name="middleName"
              value={formik.values.middleName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-4">
            <InputLabel>Tên</InputLabel>
            <TextField
              className={Styles.title}
              required
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-4">
            <InputLabel>Số điện thoại</InputLabel>
            <TextField
              className={Styles.title}
              required
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-4">
            <InputLabel>Ngày sinh</InputLabel>
            <TextField
              type={"date"}
              className="title"
              required
              id="dateOfBirth"
              name="dateOfBirth"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-4">
            <InputLabel>Giới tính</InputLabel>
            <Select
              className="title"
              required
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <MenuItem value={true}>Nam</MenuItem>
              <MenuItem value={false}>Nữ</MenuItem>
            </Select>
          </div>
          <div className="col-6">
            <InputLabel>Trạng Thái</InputLabel>
            <Select
              className="title"
              required
              id="isActive"
              name="isActive"
              value={formik.values.isActive}
              onChange={formik.handleChange}
            >
              <MenuItem value={true}>Đang Sử Dụng</MenuItem>
              <MenuItem value={false}>Không Sử Dụng</MenuItem>
            </Select>
          </div>
          <div className="col-6">
            <InputLabel>Quyền Hạn</InputLabel>
            <Select
              className="title"
              required
              id="role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
            >
              {mockRole.map((role, index) => {
                return (
                  <MenuItem key={index} value={role.id}>
                    {role.name}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className={classNames("col-12", Styles.infoCreate)}>
            <div className="row">
              <div className="col-6">
                <InputLabel>Ngày tạo</InputLabel>
                <TextField
                  className="title"
                  required
                  id="createDate"
                  name="createDate"
                  value={formik.values.createDate}
                  onChange={formik.handleChange}
                  disabled
                />
              </div>
              <div className="col-6">
                <InputLabel>Người tạo</InputLabel>
                <TextField
                  className="title"
                  required
                  id="createBy"
                  name="createBy"
                  value={formik.values.createBy}
                  onChange={formik.handleChange}
                  disabled
                />
              </div>
              <div className="col-6">
                <InputLabel>Ngày cập nhật</InputLabel>
                <TextField
                  className="title"
                  required
                  id="updateDate"
                  name="updateDate"
                  value={formik.values.updateDate}
                  onChange={formik.handleChange}
                  disabled
                />
              </div>
              <div className="col-6">
                <InputLabel>Người cập nhật</InputLabel>
                <TextField
                  className="title"
                  required
                  id="updateBy"
                  name="updateBy"
                  value={formik.values.updateBy}
                  onChange={formik.handleChange}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className={Styles.footer}>
            <button className={Styles.buttonSave} type="submit">
              Lưu
            </button>
            <button className={Styles.buttonClose} onClick={onClose}>
              Đóng
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
};

export default CreateAccountModel;
