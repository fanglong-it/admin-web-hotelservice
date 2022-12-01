import React from "react";
import AlarmContainer from "../../component/AlarmContainer/AlarmContainer";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";

export default function AlarmPage() {
  return (
    <div className="main-screen">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {/* <CreateAccountModel /> */}
        <AlarmContainer />
      </div>
    </div>
  );
}
