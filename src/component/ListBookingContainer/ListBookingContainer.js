import React, { useCallback, useEffect, useMemo } from "react";
import "./ListBookingContainer.scss";
import { DataGrid } from "@mui/x-data-grid";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingManageState$ } from "../../redux/selectors/BookingManageSelector";
import * as actions from "../../redux/actions/BookingManageAction";
import * as actionRoom from "../../redux/actions/RoomManageAction";
import moment from "moment";
import {
  BOOKED,
  CHECKIN,
  CHECKOUT,
  INFO_BOOKING_DETAIL,
} from "../../utils/constants/settingSystem";
export default function ListBookingContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(actions.getAllBooking.getAllBookingRequest());
  }, [dispatch, searchParams]);

  const [value, setValue] = React.useState("1");

  const listBooking = useSelector(bookingManageState$);

  const handleChange = (e, val) => {
    setValue(val);
  };
  const handleFillInfoCheckIn = useCallback(
    (item) => {
      const infoBooking = listBooking.find(
        (bookingItem) => bookingItem.id === item.id
      );
      dispatch(actions.getBookingById.getBookingByIdRequest(infoBooking));
      localStorage.setItem(INFO_BOOKING_DETAIL, JSON.stringify(infoBooking));
      dispatch(
        actionRoom.getRoomAvailability.getRoomAvailabilityRequest({
          booking_id:item.id
        })
      );
      navigate("/checkIn");
    },
    [navigate, listBooking, dispatch]
  );
  const handleCheckOut = useCallback(
    (id) => {
      dispatch(actions.checkOutRoom.checkOutRoomRequest({ id, navigate }));
    },
    [navigate, dispatch]
  );
  const renderTypeRoom = (roomTypeId) => {
    let roomType = "";
    switch (roomTypeId) {
      case 1:
        return (roomType = "Deluxe King/ Cao cấp");
      case 2:
        return (roomType = "Deluxe Twin/ Cao cấp");
      case 3:
        return (roomType = "Superior King/ Phòng thường");
      case 4:
        return (roomType = "Superior Twin/ Phòng thường");
      case 5:
        return (roomType = "Standard King/ Phòng thường");
      case 6:
        return (roomType = "Standard Twin/ Phòng thường");
      default:
        return roomType;
    }
  };
  const renderArr = () => {
    let arrNew = [];
    listBooking.forEach((item) => {
      arrNew.push({
        id: item.id,
        name:
          item.customer?.firstName +
          " " +
          item.customer?.middleName +
          " " +
          item.customer?.lastName,
        roomType: renderTypeRoom(item.roomTypeId),
        requestService: "Đưa Đón Sân Bay",
        arrivalDate: item.arrivalDate,
        departureDate: item.departureDate,
      });
    });
    return arrNew;
  };
  const renderArrByDateToCheckIn = () => {
    let arrNew = [];
    let currentDate = moment().format("DD/MM/YYYY");
    let listArrivalDate = listBooking.filter(
      (item) =>
        item.arrivalDate.substring(0, 10) === currentDate &&
        item.status === BOOKED
    );
    listArrivalDate.forEach((item) => {
      arrNew.push({
        id: item.id,
        name:
          item.customer?.firstName +
          " " +
          item.customer?.middleName +
          " " +
          item.customer?.lastName,
        roomType: renderTypeRoom(item.roomTypeId),
        requestService: "Đưa Đón Sân Bay",
        arrivalDate: item.arrivalDate,
        departureDate: item.departureDate,
        status: item.status,
        numOfPerson: item.numOfAdult + item.numOfChildren,
        roomTypeId: item.roomTypeId,
      });
    });
    return arrNew;
  };
  const renderArrByDateToCheckOut = () => {
    let arrNew = [];
    let currentDate = moment().format("DD/MM/YYYY");
    let listArrivalDate = listBooking.filter(
      (item) =>
        item.departureDate.substring(0, 10) === currentDate &&
        item.status === CHECKIN
    );
    listArrivalDate.forEach((item) => {
      arrNew.push({
        id: item.id,
        name:
          item.customer?.firstName +
          " " +
          item.customer?.middleName +
          " " +
          item.customer?.lastName,
        roomType: renderTypeRoom(item.roomTypeId),
        requestService: "Đưa Đón Sân Bay",
        arrivalDate: item.arrivalDate,
        departureDate: item.departureDate,
      });
    });
    return arrNew;
  };

  const allBooking = useMemo(
    () => [
      {
        field: "id",
        headerName: "Mã Đặt Phòng",
        width: 150,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.id}</div>;
        },
      },

      {
        field: "name",
        headerName: "Tên Khách Đặt",
        width: 180,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.name}</div>;
        },
      },

      {
        field: "roomType",
        headerName: "Loại Phòng",
        width: 250,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.roomType}</div>;
        },
      },
      {
        field: "requestService",
        headerName: "Dịch Vụ Đi Kèm",
        width: 200,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.requestService}</div>;
        },
      },
      {
        field: "arrivalDate",
        headerName: "Ngày Đến",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              {params.row.arrivalDate.substring(0, 10)}
            </div>
          );
        },
      },
      {
        field: "departureDate",
        headerName: "Ngày Đi",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              {params.row.departureDate.substring(0, 10)}
            </div>
          );
        },
      },
    ],
    []
  );
  const bookingArriveInDay = useMemo(
    () => [
      {
        field: "id",
        headerName: "Mã Đặt Phòng",
        width: 130,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.id}</div>;
        },
      },

      {
        field: "name",
        headerName: "Tên Khách Đặt",
        width: 200,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.name}</div>;
        },
      },

      {
        field: "roomType",
        headerName: "Loại Phòng",
        width: 250,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.roomType}</div>;
        },
      },
      {
        field: "requestService",
        headerName: "Dịch Vụ Đi Kèm",
        width: 200,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.requestService}</div>;
        },
      },
      {
        field: "arrivalDate",
        headerName: "Ngày Đến",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              {params.row.arrivalDate.substring(0, 10)}
            </div>
          );
        },
      },
      {
        field: "departureDate",
        headerName: "Ngày Đi",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              {params.row.departureDate.substring(0, 10)}
            </div>
          );
        },
      },
    ],
    []
  );
  const bookingLeaveInDay = useMemo(
    () => [
      {
        field: "id",
        headerName: "Mã Đặt Phòng",
        width: 150,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.id}</div>;
        },
      },

      {
        field: "name",
        headerName: "Tên Khách Đặt",
        width: 200,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.name}</div>;
        },
      },

      {
        field: "roomType",
        headerName: "Loại Phòng",
        width: 200,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.roomType}</div>;
        },
      },
      {
        field: "requestService",
        headerName: "Dịch Vụ Đi Kèm",
        width: 200,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.requestService}</div>;
        },
      },
      {
        field: "arrivalDate",
        headerName: "Ngày Đến",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              {params.row.arrivalDate.substring(0, 10)}
            </div>
          );
        },
      },
      {
        field: "departureDate",
        headerName: "Ngày Đi",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              {params.row.departureDate.substring(0, 10)}
            </div>
          );
        },
      },
    ],
    []
  );
  const actionColumnCheckIn = [
    {
      field: "action",
      headerName: "Hành Động",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {params.row.status === CHECKIN ? (
              <div
                className="checkInButton"
                style={{ pointerEvents: "none" }}
                // onClick={() =>
                //   handleFillInfoCheckIn(
                //     params.row.id,
                //     params.row.arrivalDate,
                //     // params.row.departureDate,
                //     // params.row.numOfPerson,
                //     // params.row.roomTypeId
                //   )
                // }
              >
                Check In
              </div>
            ) : (
              <div
                className="checkInButton"
                onClick={() => handleFillInfoCheckIn(params.row)}
              >
                Check In
              </div>
            )}
          </div>
        );
      },
    },
  ];
  const actionColumnCheckOut = [
    {
      field: "action",
      headerName: "Hành Động",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div
              className="checkInButton"
              onClick={() => handleCheckOut(params.row.id)}
            >
              Check Out
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">Danh sách booking</div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Tất Cả" value="1" />
            <Tab label="Đến Trong Ngày" value="2" />
            <Tab label="Đi Trong Ngày" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DataGrid
            className="datagrid"
            rows={renderArr()}
            columns={allBooking}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </TabPanel>
        <TabPanel value="2">
          <DataGrid
            className="datagrid"
            rows={renderArrByDateToCheckIn()}
            columns={bookingArriveInDay.concat(actionColumnCheckIn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </TabPanel>
        <TabPanel value="3">
          <DataGrid
            className="datagrid"
            rows={renderArrByDateToCheckOut()}
            columns={bookingLeaveInDay.concat(actionColumnCheckOut)}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </TabPanel>
      </TabContext>
    </div>
  );
}
