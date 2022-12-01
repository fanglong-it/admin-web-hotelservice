import "./ServiceContainer.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../data/DataTableUser";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, showModalUpdate } from "../../redux/actions/ModalAction";
import { serviceManageState$ } from "../../redux/selectors/ServiceManageSelector";
import * as actions from "../../redux/actions/ServiceManageAction";
import DialogDelete from "../DialogDelete/DialogDelete";
const ServiceContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listHotelService = useSelector(serviceManageState$);
  useEffect(() => {
    dispatch(actions.getHotelService.getHotelServiceRequest());
  }, [dispatch]);

  const renderArr = () => {
    let arrNew = [];
    listHotelService.forEach((item) => {
      arrNew.push({
        id: item.id,
        name: item.name,
        type: item.serviceCategory.name,
        status: item.status,
        image: item.image.map((item) => {
          return item.pictureUrl;
        }),
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
  const areUSureDelete = (choose) => {
    if (choose) {
      dispatch(
        actions.deleteHotelService.deleteHotelServiceRequest(idService.id)
      );
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };

  // Render Data of table
  let serviceColumns = useMemo(
    () => [
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
        headerName: "Tên dịch vụ",
        width: 300,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.name}</div>;
        },
      },
      {
        field: "type",
        headerName: "Loại",
        width: 200,
        renderCell: (params) => {
          return <div className="cellWithImg">{params.row.type}</div>;
        },
      },

      {
        field: "image",
        headerName: "Hình ảnh",
        width: 150,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src={params.row.image} alt="img" />
            </div>
          );
        },
      },
      {
        field: "status",
        headerName: "Trạng thái",
        width: 200,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus ${params.row.status}`}>
              {!params.row.status ? "Đang ẩn" : "Đang hiện"}
            </div>
          );
        },
      },
    ],
    []
  );
  const getCurrentDate = () => {
    let showDate = new Date();
    let displayDate =
      showDate.getDate() +
      "/" +
      (showDate.getMonth() + 1) +
      "/" +
      showDate.getFullYear();
    return displayDate;
  };
  const openUpdateServiceModal = useCallback(
    (id) => {
      const service = listHotelService.find(
        (serviceItem) => serviceItem.id === id
      );
      let newService = Object.assign({}, service, {
        serviceCategory_Id: service.serviceCategory.id,
      });
      dispatch(
        actions.filInfoHotelService.filInfoHotelServiceRequest(newService)
      );
      dispatch(showModalUpdate());
    },
    [listHotelService, dispatch]
  );
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
              onClick={() => openUpdateServiceModal(params.row.id)}
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
              {" "}
              Xoá
            </div>
          </div>
        );
      },
    },
  ];
  const openCreateServiceModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  return (
    <div className="datatableService">
      <div className="datatableTitle">
        Danh sách dịch vụ
        <a onClick={openCreateServiceModal} className="link">
          Thêm dịch vụ
        </a>
      </div>
      <DataGrid
        className="datagrid"
        rows={renderArr()}
        columns={serviceColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      {dialog.isLoading && (
        <DialogDelete onDialog={areUSureDelete} message={dialog.message} />
      )}
    </div>
  );
};

export default ServiceContainer;
