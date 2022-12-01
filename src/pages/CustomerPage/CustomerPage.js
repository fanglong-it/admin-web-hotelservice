import React, { useEffect, useState } from "react";
import "./CustomerPage.scss";
import Sidebar from "../../component/Sidebar/Sidebar";
import Navbar from "../../component/Navbar/Navbar";
import CheckInContainer from "../../component/CheckInContainer/CheckInContainer";
import AddNewCustomerModal from "../../component/CheckInContainer/AddNewCustomerModal/AddNewCustomerModal";
export default function CustomerPage() {
  // console.log("arrNew", renderArr());
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {/* <CheckInContainer />
        <AddNewCustomerModal/> */}
      </div>
    </div>
  );
}
