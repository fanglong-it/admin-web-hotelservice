import "./ListRequestServiceContainer.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showModal,
  showModalListService,
  showModalUpdate,
} from "../../redux/actions/ModalAction";
import * as actions from "../../redux/actions/RequestServiceManageAction";
import DialogDelete from "../DialogDelete/DialogDelete";
import { requestServiceManageState$ } from "../../redux/selectors/RequestServiceManageSelector";
export default function ListRequestServiceContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listRequestService = useSelector(requestServiceManageState$);
  console.log("Hello Thanh Anh", listRequestService);
  useEffect(() => {
    dispatch(actions.getRequestService.getRequestServiceRequest());
  }, [dispatch]);

  const renderArr = () => {
    let arrNew = [];
    listRequestService?.forEach((item) => {
      arrNew.push({
        id: item.id,
        roomNo:item.booking.room?.roomNo,
        totalAmount: item.totalAmount,
        createDate: item.createDate,
        customerName: item.createBy,
        // listRequestService.customer.firstName +
        // "" +
        // listRequestService.customer.middleName +
        // "" +
        // listRequestService.customer.lastName,
        status: item.status,
      });
    });
    return arrNew;
  };
  // const [data, setData] = useState(renderArr());

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

  // Render Data of table
  let serviceColumns = useMemo(
    () => [
      {
        field: "id",
        headerName: "Mã Hóa Đơn",
        width: 150,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.id}</div>;
        },
      },
      {
        field: "roomNo",
        headerName: "Phòng",
        width: 150,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.roomNo}</div>;
        },
      },
      {
        field: "totalAmount",
        headerName: "Thành Tiền",
        width: 200,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus`}>{params.row.totalAmount}</div>
          );
        },
      },
      {
        field: "createDate",
        headerName: "Ngày Đặt",
        width: 200,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus`}>{params.row.createDate}</div>
          );
        },
      },
      {
        field: "customerName",
        headerName: "Tên Khách",
        width: 200,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus`}>{params.row.customerName}</div>
          );
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
  const openRequestServiceModal = useCallback(
    (id) => {
      const service = listRequestService.find(
        (serviceItem) => serviceItem.id === id
      );
    //  let newService = service
      dispatch(
        actions.getRequestServiceById.getRequestServiceByIdRequest(service)
      );
      dispatch(showModalListService());
    },
    [listRequestService,dispatch]
  );
  const actionColumn = [
    {
      field: "action",
      headerName: "Hành Động",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="updateButton"
              onClick={() => openRequestServiceModal(params.row.id)}
            >
              Xem Chi Tiết
            </div>
            {/* <Link to="" style={{ textDecoration: "none" }}>
              <div className="viewButton">Xem</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              {" "}
              Xoá
            </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatableRequestService">
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
