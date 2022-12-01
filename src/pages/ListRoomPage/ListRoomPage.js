import React from "react";
import ListRoomContainer from "../../component/ListRoomContainer/ListRoomContainer";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./ListRoomPage.scss";
export default function ListRoomPage() {
  return (
    <div className="main-screenListRoom">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ListRoomContainer />
      </div>
    </div>
  );
}
