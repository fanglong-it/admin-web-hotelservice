import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CampaignIcon from "@mui/icons-material/Campaign";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PersonIcon from "@mui/icons-material/Person";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { userState$ } from "../../redux/selectors/UserSelector";
import { USER_LOGIN, USER_ROLE } from "../../utils/constants/settingSystem";
import { ManageAccounts } from "@mui/icons-material";
export default function Sidebar() {
  const userInfo = useSelector(userState$);
  const renderByAuth = () => {
    if (userInfo.userRole === USER_ROLE.ADMIN) {
      return (
        <div className="sidebar">
          <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">5 Men Hotel</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              <li>
                <NavLink
                  to="/overview"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <DashboardIcon className="icon" />
                  <span>Tổng Quan</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <RoomServiceIcon className="icon" />
                  <span>Dịch Vụ</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/location"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <FmdGoodIcon className="icon" />
                  <span>Địa Điểm</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <CampaignIcon className="icon" />
                  <span>Tin Tức</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/greeting"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <EmojiPeopleIcon className="icon" />
                  <span>Lời Chào</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <ManageAccounts className="icon" />
                  <span>Account</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <hr />
          <div className="bottom">
            <Link to="/overview" style={{ textDecoration: "none" }}>
              <LogoutIcon className="icon" />
              <span>Đăng Xuất</span>
            </Link>
          </div>
        </div>
      );
    } else if (userInfo.userRole === USER_ROLE.HOTEL_MANAGE) {
      return (
        <div className="sidebar">
          <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">5 Men Hotel</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              <li>
                <NavLink
                  to="/listRoom"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <MeetingRoomIcon className="icon" />
                  <span>Sơ Đồ Phòng</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listBooking"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <FormatListBulletedIcon className="icon" />
                  <span>Danh Sách Booking</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listCustomer"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <PersonIcon className="icon" />
                  <span>Khách Hàng</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/alarm"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <AccessAlarmIcon className="icon" />
                  <span>Báo Thức</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <hr />
          <div className="bottom">
            <Link to="/overview" style={{ textDecoration: "none" }}>
              <LogoutIcon className="icon" />
              <span>Đăng Xuất</span>
            </Link>
          </div>
        </div>
      );
    } else if (userInfo.userRole === USER_ROLE.RESTAURANT) {
      return (
        <div className="sidebar">
          <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">5 Men Hotel</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              <li>
                <NavLink
                  to="/listRoom"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <FormatListBulletedIcon className="icon" />
                  <span>Sơ Đồ Phòng</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listRequestServiceStaff"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <MeetingRoomIcon className="icon" />
                  <span>Danh Sách Yêu Cầu Dịch Vụ</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <hr />
          <div className="bottom">
            <Link to="/overview" style={{ textDecoration: "none" }}>
              <LogoutIcon className="icon" />
              <span>Đăng Xuất</span>
            </Link>
          </div>
        </div>
      );
    } else if (userInfo.userRole === USER_ROLE.HOUSEKEEPING) {
      return (
        <div className="sidebar">
          <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">5 Men Hotel</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              <li>
                <NavLink
                  to="/listRoom"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <FormatListBulletedIcon className="icon" />
                  <span>Sơ Đồ Phòng</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listTurnDownService"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <MeetingRoomIcon className="icon" />
                  <span>Danh Sách Yêu Cầu Dịch Vụ</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <hr />
          <div className="bottom">
            <Link to="/overview" style={{ textDecoration: "none" }}>
              <LogoutIcon className="icon" />
              <span>Đăng Xuất</span>
            </Link>
          </div>
        </div>
      );
    }
  };
  return <div>{renderByAuth()}</div>;
}
