import { Modal } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { modalListServiceState$ } from "../../../redux/selectors/ModalSelector";
import "./ModalListRequestService.scss";
import { hideModalListService } from "../../../redux/actions/ModalAction";

import { useNavigate } from "react-router-dom";
import * as actions from "../../../redux/actions/RequestServiceManageAction";
import { DataGrid } from "@mui/x-data-grid";
import { requestServiceDetailManageState$ } from "../../../redux/selectors/RequestServiceManageSelector";
import DialogDelete from "../../DialogDelete/DialogDelete";
export default function ModalListRequestService() {
  const dispatch = useDispatch();
  const isShow = useSelector(modalListServiceState$);
  const navigate = useNavigate();
  const infoOderDetail = useSelector(requestServiceDetailManageState$);
  const onClose = useCallback(() => {
    dispatch(hideModalListService());
  }, [dispatch]);
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
  const handleCancelService = (id) => {
    handleDialog("Bạn chắc chắn xóa dịch vụ này?", true);
    setIdService({
      id: id,
    });
  };
  const areUSureDelete = (choose) => {
    if (choose) {
      dispatch(
        actions.cancelRequestServiceDetailById.cancelRequestServiceDetailByIdRequest(
          { orderDetailId: idService, orderId: infoOderDetail.id }
        )
      );
      dispatch(hideModalListService())
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };
  const renderArr = () => {
    let arrNew = [];
    infoOderDetail.orderDetails?.forEach((item) => {
      arrNew.push({
        id: item.id,
        name: item.service.name,
        quantity: item.quantity,
        price: item.price,
        amount: item.amount,
        orderDate: item.orderDate,
        customerName:
          infoOderDetail.booking.customer.firstName +
          " " +
          infoOderDetail.booking.customer.middleName +
          " " +
          infoOderDetail.booking.customer.lastName,
        status: infoOderDetail.status,
      });
    });
    return arrNew;
  };
  // const handleCancelService = useCallback(
  //   (id) => {
  //     dispatch(
  //       actions.cancelRequestServiceDetailById.cancelRequestServiceDetailByIdRequest(
  //         { orderDetailId: id, orderId: infoOderDetail.id }
  //       )
  //     );
  //     dispatch(hideModalListService())
  //   },
  //   [infoOderDetail, dispatch]
  // );
  const actionColumn = [
    {
      field: "action",
      headerName: "Hành Động",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {infoOderDetail.status === "BOOKED" ? (
              <div
                className="cancelButton"
                onClick={() => handleCancelService(params.row.id)}
              >
                Hủy
              </div>
            ) : (
              <div
                className="cancelButton"
                style={{ pointerEvents: "none" }}
                onClick={() => handleCancelService(params.row.id)}
              >
                Hủy
              </div>
            )}
          </div>
        );
      },
    },
  ];
  const allBooking = useMemo(
    () => [
      {
        field: "id",
        headerName: "Mã Món",
        width: 150,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.id}</div>;
        },
      },

      {
        field: "name",
        headerName: "Tên Dịch Vụ",
        width: 200,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.name}</div>;
        },
      },

      {
        field: "quantity",
        headerName: "Số Lượng",
        width: 150,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.quantity}</div>;
        },
      },
      {
        field: "price",
        headerName: "Đơn Giá",
        width: 150,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.price}</div>;
        },
      },
      {
        field: "amount",
        headerName: "Thành Tiền",
        width: 150,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.amount}</div>;
        },
      },
      {
        field: "orderDate",
        headerName: "Ngày Đến",
        width: 150,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              {params.row.orderDate.substring(0, 10)}
            </div>
          );
        },
      },
      {
        field: "customerName",
        headerName: "Tên Khách",
        width: 200,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.customerName}</div>;
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
                ? "Chờ Xử Lý"
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
  const handleConfirmService = useCallback(() => {
    dispatch(
      actions.confirmRequestService.confirmRequestServiceRequest({
        orderId: infoOderDetail.id,
        status: infoOderDetail.status,
        navigate,
      })
    );
    dispatch(hideModalListService());
  }, [infoOderDetail, navigate, dispatch]);
  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        <div className="datatableModalRequestService">
          <DataGrid
            className="datagrid"
            getRowId={(row) => row.id}
            rows={renderArr()}
            columns={allBooking.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
          {/* {dialog.isLoading && (
        <DialogDelete onDialog={areUSureDelete} message={dialog.message} />
      )} */}
          {infoOderDetail.status === "BOOKED" ? (
            <div className="footer">
              <button
                className="buttonConfirm"
                onClick={() => handleConfirmService()}
              >
                <CheckIcon className="icon" />
                Xác Nhận
              </button>
              <button className="buttonClose" onClick={onClose}>
                Đóng
              </button>
            </div>
          ) : infoOderDetail.status === "PROCESSING" ? (
            <div className="footer">
              <button
                className="buttonDone"
                type="submit"
                onClick={() => handleConfirmService()}
              >
                <CheckIcon className="icon" />
                Hoàn Thành
              </button>
              <button className="buttonClose" onClick={onClose}>
                Đóng
              </button>
            </div>
          ) : (
            <div className="footer">
              <button className="buttonClose" onClick={onClose}>
                Đóng
              </button>
            </div>
          )}
        </div>
      </Modal>
      {dialog.isLoading && (
        <DialogDelete onDialog={areUSureDelete} message={dialog.message} />
      )}
    </div>
  );
}
