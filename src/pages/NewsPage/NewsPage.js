import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import Navbar from "../../component/Navbar/Navbar";
import NewsContainer from "../../component/NewsContainer/NewsContainer";
import "./NewsPage.scss";
export default function NewsPage() {
  return (
    <div className="main-screen">
      <div className="main-screen">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <NewsContainer />
        </div>
      </div>
    </div>
  );
}
