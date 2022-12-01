import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import OverviewContainer from "../../component/OverviewContainer/OverviewContainer";
import "./HomePage.scss"
export default function HomePage() {
  return (
    <div className="main-screen">
      <Sidebar />
      <OverviewContainer />
    </div>
  );
}
