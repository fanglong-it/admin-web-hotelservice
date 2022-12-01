import React, { useCallback, useState } from "react";
import "./Room.scss";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userState$ } from "../../../redux/selectors/UserSelector";
import { USER_ROLE } from "../../../utils/constants/settingSystem";
import RoomPopup from "./roomPopup";

export default function Room({ listRoom }) {
  const userInfo = useSelector(userState$);
  let MenusEmpty = [{ name: "Tạo đặt phòng", id: 0 }];
  let MenusNotEmptyHousekeeping = [{ name: "Xem Yêu Cầu Dịch Vụ", id: 0 }];
  let MenusNotEmptyRestaurant = [{ name: "Xem Yêu Cầu Dịch Vụ", id: 0 }];
  let MenusNotEmpty = [
    { name: "Xem thông tin khách", id: 0 },
    { name: "Gửi thông báo", id: 1 },
    { name: "Check out", id: 2 },
  ];
  const [] = useState();
  const [openNotEmpty, setOpenNotEmpty] = useState({ id: 0, display: false });
  const [openEmpty, setOpenEmpty] = useState({ id: 0, display: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderMenuByRole = (item) => {
    if (userInfo.userRole === USER_ROLE.HOTEL_MANAGE) {
      return (
        <div className="rowIcon">
          <TouchAppIcon
            onClick={() => {
              setOpenNotEmpty({
                id: item.id,
                display: !openNotEmpty.display,
              });
            }}
            className="icon"
          />
          {openNotEmpty.display && openNotEmpty.id === item.id && (
            <div className="dropDownTouch">
              <div>
                <KeyboardArrowUpIcon />
              </div>
              <div onClick={() => setOpenNotEmpty({ id: item.id })}>
                {MenusNotEmpty.map((menu) => (
                  <span className="menuhover" key={menu.id}>
                    {menu.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    } else if (userInfo.userRole === USER_ROLE.RESTAURANT) {
      return (
        <div className="rowIcon">
          <RoomServiceIcon
            onClick={() => {
              setOpenNotEmpty({
                id: item.id,
                display: !openNotEmpty.display,
              });
            }}
            className="icon"
          />
          {openNotEmpty.display && openNotEmpty.id === item.id && (
            <div className="dropDownTouch">
              <div>
                <KeyboardArrowUpIcon />
              </div>
              <div onClick={() => setOpenNotEmpty({ id: item.id })}>
                {MenusNotEmptyRestaurant.map((menu) => (
                  <span className="menuhover" key={menu.id}>
                    {menu.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    } else if (userInfo.userRole === USER_ROLE.HOUSEKEEPING) {
      return (
        <div className="rowIcon">
          <CleaningServicesIcon
            onClick={() => {
              setOpenNotEmpty({
                id: item.id,
                display: !openNotEmpty.display,
              });
            }}
            className="icon"
          />
          {openNotEmpty.display && openNotEmpty.id === item.id && (
            <div className="dropDownTouch">
              <div>
                <KeyboardArrowUpIcon />
              </div>
              <div onClick={() => setOpenNotEmpty({ id: item.id })}>
                {MenusNotEmptyHousekeeping.map((menu) => (
                  <span className="menuhover" key={menu.id}>
                    {menu.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
  };
  const renderMenuByRoleIsEmpty = (item) => {
    if (userInfo.userRole === USER_ROLE.HOTEL_MANAGE) {
      return (
        <div className="rowIcon">
          <TouchAppIcon
            onClick={() => {
              setOpenEmpty({
                id: item.id,
                display: !openEmpty.display,
              });
            }}
            className="icon"
          />
          {openEmpty.display && openEmpty.id === item.id && (
            <div className="dropDownTouch">
              <div>
                <KeyboardArrowUpIcon />
              </div>
              <div onClick={() => setOpenEmpty({ id: item.id })}>
                {MenusEmpty.map((menu) => (
                  <span className="menuhover" key={menu.id}>
                    {menu.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    } else if (userInfo.userRole === USER_ROLE.RESTAURANT) {
      return (
        <div className="rowIcon">
          <RoomServiceIcon
            onClick={() => {
              setOpenNotEmpty({
                id: item.id,
                display: !openEmpty.display,
              });
            }}
            className="icon"
          />
          {openEmpty.display && openEmpty.id === item.id && (
            <div className="dropDownTouch">
              <div>
                <KeyboardArrowUpIcon />
              </div>
              <div onClick={() => setOpenEmpty({ id: item.id })}>
                {MenusNotEmptyRestaurant.map((menu) => (
                  <span className="menuhover" key={menu.id}>
                    {menu.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    } else if (userInfo.userRole === USER_ROLE.HOUSEKEEPING) {
      return (
        <div className="rowIcon" style={{pointerEvents:"none"}}>
          <CleaningServicesIcon
            onClick={() => {
              setOpenEmpty({
                id: item.id,
                display: !openEmpty.display,
              });
            }}
            className="icon"
          />
          {openEmpty.display && openEmpty.id === item.id && (
            <div className="dropDownTouch">
              <div>
                <KeyboardArrowUpIcon />
              </div>
              <div onClick={() => setOpenEmpty({ id: item.id })}>
                {MenusNotEmptyHousekeeping.map((menu) => (
                  <span className="menuhover" key={menu.id}>
                    {menu.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
  };
  // if (userInfo.userRole === USER_ROLE.HOTEL_MANAGE) {
  //   MenusEmpty = [{ name: "Tạo đặt phòng", id: 0 }];
  //   MenusNotEmpty = [
  //     { name: "Xem thông tin khách", id: 0 },
  //     { name: "Gửi thông báo", id: 1 },
  //     { name: "Check out", id: 2 },
  //   ];
  // } else if (userInfo.userRole === USER_ROLE.RESTAURANT) {
  //   MenusEmpty = [{ name: "Xem yêu cầu dịch vụ", id: 0 }];

  //   MenusNotEmpty = [{ name: "Xem yêu cầu dịch vụ", id: 0 }];
  // }

  const handleFillInfoRoom = useCallback(
    (id) => {
      // const infoBooking = listBooking.find(
      //   (bookingItem) => bookingItem.id === id
      // );
      // dispatch(actions.getBookingById.getBookingByIdRequest(infoBooking));
      navigate("/checkCustomerInfo");
    },

    [navigate, dispatch]
  );

  return (
    <div className="RoomItem row">
      {listRoom &&
        listRoom.map((item, i) => {
          if (item.booking === null) {
            return (
              <div className="RoomDetailEmpty col-3" key={i}>
                <div className="RoomTitile">
                  <p>{item.roomType.name}</p>
                </div>
                <div className="RoomNo">
                  <p>{item.roomNo}</p>
                </div>
                {renderMenuByRoleIsEmpty(item)}
              </div>
            );
          } else {
            return (
              <div className="RoomDetail col-3" key={i}>
                <div className="RoomTitile">
                  <p>{item.roomType.name}</p>
                </div>
                <div className="CustomerName">
                  <p>{item.booking.customer?.middleName} {item.booking.customer?.lastName}</p>
                </div>
                <div className="RoomNo">
                  <p>{item.roomNo}</p>
                </div>

                {renderMenuByRole(item)}
              </div>
            );
          }
        })}
    </div>
  );
}
