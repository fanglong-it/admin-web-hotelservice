import React from "react";
import AccountContainer from "../../component/AccountContainer/AccountContainer";
import CreateAccountModel from "../../component/AccountContainer/CreateAccountModel/CreateAccountModel";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";

const AccountPage = () => {
  return (
    <div className="main-screen">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <CreateAccountModel />
        <AccountContainer />
      </div>
    </div>
  );
};

export default AccountPage;
