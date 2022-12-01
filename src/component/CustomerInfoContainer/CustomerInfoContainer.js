import { useDispatch } from "react-redux";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { useFormik } from "formik";
import { DataGrid } from "@mui/x-data-grid";

export default function CustomerInfoContainer() {
  console.log("Hello Duong");
  const formik = useFormik({
    initialValues: {
      id: 0,
      name: "",
      createDate: "",
      numOfAdult: "",
      numOfChildren: "",
      arrivalDate: "",
      arrivalTime: "",
      departureDate: "",
      departureTime: "12:00",
      phoneNumber: "",
      email: "",
      idNo: "",
      gender: "",
      birthDate: "",
    },
    onSubmit: (values, { resetForm }) => {
      //   onSubmitService(values);
      resetForm({ values: "" });
    },
  });
  return (
    <div className="customerInfo">
      <div>
        <p>Anh Hoang Duong</p>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-2 InfoRoomItem">
          <InputLabel className="label">Mã Đặt Phòng</InputLabel>
          <TextField
            className="title"
            required
            disabled
            id="id"
            name="id"
            value={formik.values.id}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-2 InfoRoomItem">
          <InputLabel className="label">Tên Khách Hàng</InputLabel>
          <TextField
            className="title"
            disabled
            required
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-2 InfoRoomItem">
          <InputLabel className="label">Ngày Đặt</InputLabel>
          <TextField
            className="title"
            disabled
            required
            id="createDate"
            name="createDate"
            value={formik.values.createDate}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-2 InfoRoomItem">
          <InputLabel className="label">Người Lớn</InputLabel>
          <TextField
            className="title"
            disabled
            required
            id="numOfAdult"
            name="numOfAdult"
            value={formik.values.numOfAdult}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-2 InfoRoomItem">
          <InputLabel className="label">Trẻ Em</InputLabel>
          <TextField
            className="title"
            disabled
            required
            id="numOfChildren"
            name="numOfChildren"
            value={formik.values.numOfChildren}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-2 InfoRoomItem">
          <InputLabel className="label">Ngày Đến</InputLabel>
          <TextField
            className="title"
            disabled
            required
            id="arrivalDate"
            name="arrivalDate"
            value={formik.values.arrivalDate}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-2 InfoRoomItem">
          <InputLabel className="label">Giờ Đến</InputLabel>
          <TextField
            className="title"
            required
            id="arrivalTime"
            name="arrivalTime"
            value={formik.values.arrivalTime}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-2 InfoRoomItem">
          <InputLabel className="label">Ngày Đi</InputLabel>
          <TextField
            className="title"
            disabled
            required
            id="departureDate"
            name="departureDate"
            value={formik.values.departureDate}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-2 InfoRoomItem">
          <InputLabel className="label">Giờ Đi</InputLabel>
          <TextField
            className="title"
            disabled
            required
            id="departureTime"
            name="departureTime"
            value={formik.values.departureTime}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <p style={{ paddingTop: "20px" }}>Khách ở cùng</p>
      <hr style={{ width: "7%" }} />
      {/* // */}
      <p style={{ paddingTop: "" }}>
        Tiền phòng: <strong>1.000.000 VNĐ</strong>{" "}
      </p>
      <hr style={{ width: "6%" }} />
      {/*  */}
      <p style={{ paddingTop: "20px" }}>Các dịch vụ sử dụng</p>
      <hr style={{ width: "10.1%" }} />
    </div>
  );
}
