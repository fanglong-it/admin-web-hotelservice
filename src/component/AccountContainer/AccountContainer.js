import { DataGrid } from "@mui/x-data-grid";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showCreateAccountModel } from "../../redux/actions/ModalAction";
import DialogDelete from "../DialogDelete/DialogDelete";
import "./AccountContainer.module.scss";

const AccountContainer = () => {
  const dispatch = useDispatch();

  const handleOpenCreateModel = useCallback(() => {
    dispatch(showCreateAccountModel());
  }, [dispatch]);

  const renderArr = () => {
    let arrNew = [
      {
        id: 1,
        userName: "datln04",
        firstName: "Pham",
        middleName: "Thanh",
        lastName: "Dat",
        gender: true,
        phoneNumber: "0123456789",
        dateOfBirth: "02/02/2002",
        role: "ROLE_MANAGER",
        isActive: true,
      },
      {
        id: 2,
        userName: "thucCN",
        firstName: "Nguyen",
        middleName: "Cong",
        lastName: "Thuc",
        gender: false,
        phoneNumber: "0987654321",
        dateOfBirth: "11/04/1998",
        role: "ROLE_HOUSEKEEPING",
        isActive: true,
      },
      {
        id: 3,
        userName: "SonDao",
        firstName: "Dao",
        middleName: "Hong",
        lastName: "Son",
        gender: false,
        phoneNumber: "0112233445",
        dateOfBirth: "13/07/2000",
        role: "ROLE_RECEPTIONIST",
        isActive: true,
      },
    ];
    // listHotelService.forEach((item) => {
    //   arrNew.push({
    //     id: item.id,
    //     name: item.name,
    //     type: item.serviceCategory.name,
    //     status: item.status,
    //     image: item.image.map((item) => {
    //       return item.pictureUrl;
    //     }),
    //   });
    // });
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
  const areUSureDelete = (choose) => {
    if (choose) {
      // dispatch(
      //   actions.deleteHotelService.deleteHotelServiceRequest(idService.id)
      // );
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Chức năng",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="updateButton"
              // onClick={() => openUpdateServiceModal(params.row.id)}
            >
              Cập nhật
            </div>
            <Link to="" style={{ textDecoration: "none" }}>
              <div className="viewButton">Xem</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Xoá
            </div>
          </div>
        );
      },
    },
  ];

  // Render Data of table
  let serviceColumns = useMemo(
    () => [
      {
        field: "id",
        headerName: "Mã Tài Khoản",
        width: 140,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.id}</div>;
        },
      },
      {
        field: "userName",
        headerName: "Tài Khoản",
        width: 200,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.userName}</div>;
        },
      },
      {
        field: "firstName",
        headerName: "Họ",
        width: 100,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.firstName}</div>;
        },
      },
      {
        field: "middleName",
        headerName: "Tên Lót",
        width: 150,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.middleName}</div>;
        },
      },
      {
        field: "lastName",
        headerName: "Tên",
        width: 100,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.lastName}</div>;
        },
      },
      {
        field: "gender",
        headerName: "Giới Tính",
        width: 100,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              {params.row.gender ? "Name" : "Nữ"}
            </div>
          );
        },
      },
      {
        field: "phoneNumber",
        headerName: "Số điện thoại",
        width: 130,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.phoneNumber}</div>;
        },
      },
      {
        field: "dateOfBirth",
        headerName: "Ngày Sinh",
        width: 130,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.dateOfBirth}</div>;
        },
      },
      {
        field: "role",
        headerName: "Quyền Hạn",
        width: 200,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.role}</div>;
        },
      },
      {
        field: "isActive",
        headerName: "Trạng thái",
        width: 100,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus ${params.row.isActive}`}>
              {params.row.isActive ? "Đang hiện" : "Đang ẩn"}
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="datatableService">
      <div className="datatableTitle">
        Danh sách Tài Khoản
        <div onClick={handleOpenCreateModel} className="link">
          Thêm Tài Khoản
        </div>
      </div>
      <DataGrid
        className="datagrid"
        rows={renderArr()}
        columns={serviceColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
      {dialog.isLoading && (
        <DialogDelete onDialog={areUSureDelete} message={dialog.message} />
      )}
    </div>
  );
};

export default AccountContainer;
