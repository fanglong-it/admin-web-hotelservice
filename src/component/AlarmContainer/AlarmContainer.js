import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import "./AlarmContainer.scss";
export default function AlarmContainer() {
    const formik = useFormik({
        initialValues: {
          dataTime:""
        },
        onSubmit: (values, { resetForm }) => {
        //   onSubmitInfoUser(values);
          resetForm({ values: "" });
        },
        enableReinitialize: true,
      });
  return (
    <div className="AlarmContainer">
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
                <InputLabel>Giờ Báo Thức</InputLabel>
                <TextField
                  className="title"
                  type="time"
                  required
                  id="dataTime"
                  name="dataTime"
                  value={formik.values.dataTime || ""}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-4">
                <InputLabel>Tên</InputLabel>
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
          <div className="footer">
            <button className="buttonSave" type="submit">
              Lưu
            </button>
            {/* <button className="buttonClose" onClick={onClose}>
              Đóng
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
}
