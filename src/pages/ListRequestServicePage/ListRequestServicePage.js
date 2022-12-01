import React from "react";
import { useSelector } from "react-redux";
import ListRequestServiceContainer from "../../component/ListRequestService/ListRequestServiceContainer";
import ModalListRequestService from "../../component/ListRequestService/ModalListRequestService.js/ModalListRequestService";
import Navbar from "../../component/Navbar/Navbar";
import PopupSucess from "../../component/PopupSuccess/PopupSuccess";
import Sidebar from "../../component/Sidebar/Sidebar";
import { successState$ } from "../../redux/selectors/LoadingSelector";
import "./ListRequestServicePage.scss";
export default function ListRequestServicePage() {
  let isSuccess = useSelector(successState$);
  return (
    <div className="main-screen">
      {isSuccess ? <PopupSucess /> : ""}
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ListRequestServiceContainer />
        <ModalListRequestService />
      </div>
    </div>
  );
}
