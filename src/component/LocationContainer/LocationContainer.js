import React, { useEffect } from "react";
import "./LocationContainer.scss";
import { DataGrid } from "@mui/x-data-grid";
import {  userRows } from "../../data/DataTableLocation";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/LocationManageAction"
import {locationManageState$} from "../../redux/selectors/LocationManageSelector"
export default function LocationContainer() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actions.getLocation.getLocationRequest())
  },[dispatch])
  const listLocation = useSelector(locationManageState$)
  const [data, setData] = useState(listLocation);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
   const locationColumns = [
    {
      field: "id",
      headerName: "Mã",
      width: 100,
      renderCell: (params) => {
        return <div className="cellWithImg">{params.row.id}</div>;
      },
    },
    {
      field: "name",
      headerName: "Tên Địa Điểm",
      width: 300,
      renderCell: (params) => {
        return <div className="cellWithImg">{params.row.name}</div>;
      },
    },
    
    {
      field: "img",
      headerName: "Hình Ảnh",
      width: 250,
    },
    {
      field: "status",
      headerName: "Trạng Thái",
      width: 250,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {!params.row.status ? "Đang ẩn" : "Đang hiện"}
          </div>
        );
      },
    },
  ];
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatableLocation">
      <div className="datatableTitle">
        Danh sách địa điểm
        <Link to="/users/new" className="link">
          Thêm Địa Điểm
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={listLocation}
        columns={locationColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
