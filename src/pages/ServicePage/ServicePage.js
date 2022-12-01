import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import CreateServiceModal from "../../component/ServiceContainer/CreateServiceModal/CreateServiceModal";
import ServiceContainer from "../../component/ServiceContainer/ServiceContainer";
import UpdateServiceModal from "../../component/ServiceContainer/UpdateServiceModal/UpdateServiceModal";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./ServicePage.scss";
export default function ServicePage() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <CreateServiceModal />
        <UpdateServiceModal />
        <ServiceContainer />
      </div>
    </div>
  );
}
