import "./ListTurnDownServiceContainer.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/RequestServiceManageAction";
// import DialogDelete from "../DialogDelete/DialogDelete";
import { turnDownServiceManageState$ } from "../../../redux/selectors/RequestServiceManageSelector";
import {
  BOOKED,
  DONE,
  PROCESSING,
} from "../../../utils/constants/settingSystem";
export default function ListTurnDownServiceContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listRequestService = useSelector(turnDownServiceManageState$);
  console.log("Hello Thanh Anh", listRequestService);
  useEffect(() => {
    dispatch(actions.getTurnDownService.getTurnDownServiceRequest());
  }, [dispatch]);

  const renderArr = () => {
    let arrNew = [];
    let listRequestServiceNew = listRequestService.filter(
      (item) => item.status !== DONE
    );
    listRequestServiceNew?.forEach((item, index) => {
      arrNew.push({
        stt: index + 1,
        id: item.id,
        booking_Id: item.booking.id,
        requestServiceName: item.requestServiceName,
        requestServiceType: item.requestServiceType,
        roomNo: item.booking.room?.roomNo,
        dateTime: item.dateTime.substring(0,10),
        time: item.dateTime.substring(10),
        customerName:
          item.booking.customer.firstName +
          " " +
          item.booking.customer.middleName +
          " " +
          item.booking.customer.lastName,
        status: item.status,
      });
    });
    return arrNew;
  };

  //Handle Dialog
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });
  const [idService, setIdService] = useState({
    id: 0,
  });
  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };
  const handleDelete = (id) => {
    handleDialog("Bạn chắc chắn xóa dịch vụ này?", true);
    setIdService({
      id: id,
    });
  };
  // const areUSureDelete = (choose) => {
  //   if (choose) {
  //     dispatch(
  //       actions.deleteHotelService.deleteHotelServiceRequest(idService.id)
  //     );
  //     handleDialog("", false);
  //   } else {
  //     handleDialog("", false);
  //   }
  // };
  const handleConfirmturnService = useCallback(
    (item) => {
      dispatch(
        actions.confirmTurnDownService.confirmTurnDownServiceRequest({
          booking_Id: item.booking_Id,
          dateTime: item.dateTime,
          id: item.id,
          requestServiceName: item.requestServiceName,
          requestServiceType: item.requestServiceType,
          status: PROCESSING,
        })
      );
    },
    [dispatch]
  );
  const handleCompeleteturnService = useCallback(
    (item) => {
      dispatch(
        actions.confirmTurnDownService.confirmTurnDownServiceRequest({
          booking_Id: item.booking_Id,
          dateTime: item.dateTime,
          id: item.id,
          requestServiceName: item.requestServiceName,
          requestServiceType: item.requestServiceType,
          status: DONE,
        })
      );
    },
    [dispatch]
  );
  // Render Data of table
  let serviceColumns = useMemo(
    () => [
      {
        field: "roomNo",
        headerName: "Phòng",
        width: 150,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row?.roomNo}</div>;
        },
      },
      {
        field: "customerName",
        headerName: "Tên Khách",
        width: 180,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus`}>{params.row.customerName}</div>
          );
        },
      },
      {
        field: "requestServiceName",
        headerName: "Tên Dịch Vụ",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">{params.row.requestServiceName}</div>
          );
        },
      },
      {
        field: "dateTime",
        headerName: "Ngày Đặt",
        width: 150,
        renderCell: (params) => {
          return <div className={`cellWithStatus`}>{params.row.dateTime}</div>;
        },
      },
      {
        field: "time",
        headerName: "Thời Gian Thực Hiện",
        width: 200,
        renderCell: (params) => {
          return <div className={`cellWithStatus`}>{params.row.time}</div>;
        },
      },
      {
        field: "status",
        headerName: "Trạng Thái",
        width: 150,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus ${params.row.status}`}>
              {params.row.status === "BOOKED"
                ? "Chờ Xác Nhận"
                : params.row.status === "PROCESSING"
                ? "Chờ Xử Lý"
                : "Hoàn Thành"}
            </div>
          );
        },
      },
    ],
    []
  );
  // const getCurrentDate = () => {
  //   let showDate = new Date();
  //   let displayDate =
  //     showDate.getDate() +
  //     "/" +
  //     (showDate.getMonth() + 1) +
  //     "/" +
  //     showDate.getFullYear();
  //   return displayDate;
  // };
  //   const openRequestServiceModal = useCallback(
  //     (id) => {
  //       const service = listRequestService.find(
  //         (serviceItem) => serviceItem.id === id
  //       );
  //     //  let newService = service
  //       dispatch(
  //         actions.getRequestServiceById.getRequestServiceByIdRequest(service)
  //       );
  //       dispatch(showModalListService());
  //     },
  //     [listRequestService,dispatch]
  //   );
  const actionColumn = [
    {
      field: "action",
      headerName: "Hành Động",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            {params.row.status === BOOKED ? (
              <div className="cellAction">
                <div
                  className="confirmButton"
                  onClick={() => handleConfirmturnService(params.row)}
                >
                  Xác Nhận
                </div>
                {/* <div
                  className="cancelButton"
                  //   onClick={() => openRequestServiceModal(params.row.id)}
                >
                  Hủy
                </div> */}
              </div>
            ) : params.row.status === PROCESSING ? (
              <div className="cellAction">
                <div
                  className="doneButton"
                  onClick={() => handleCompeleteturnService(params.row)}
                >
                  Hoàn Thành
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatableTurnDownService">
      <div className="datatableTitle">Danh sách yêu cầu dịch vụ</div>
      <DataGrid
        className="datagrid"
        getRowId={(row) => row.id}
        rows={renderArr()}
        columns={serviceColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
      {/* {dialog.isLoading && (
        <DialogDelete onDialog={areUSureDelete} message={dialog.message} />
      )} */}
    </div>
  );
}
