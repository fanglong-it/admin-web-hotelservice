import React from "react";
import "./GreetingScreen.scss";
import DoneIcon from "@mui/icons-material/Done";
export default function GreetingScreen() {
  return (
    <div className="GreetingScreen">
      <p className="greeting-title">Màn Hình Chào</p>
      <form className="form-greeting">
        <input type="text" placeholder="Xin Chào" />
        <div className="gender">
          <p style={{color:"#888177", borderBottom:" 0.5px solid #888177"}}>Giới Tính:</p>
          <div className="gender-item">
            <p style={{color:"#888177"}}>Nam</p>
            <input type="checkbox" />
          </div>
          <div className="gender-item">
            <p style={{color:"#888177"}}>Nữ</p>
            <input type="checkbox" />
          </div>
        </div>
        <div className="greeting-display">
          <p style={{color:"#888177", borderBottom:" 0.5px solid #888177",marginRight:"20px",minWidth:"max-content"}}>Câu chào sẽ được hiển thị:</p>
          <p>Xin Chào Anh/Chị "Tên Khách Hàng"</p>
        </div>
        <div className="greeting-submit">
          <button type="submit">Lưu</button>
          <span className="info-success">
            <DoneIcon className="icon" /> Lưu Thành Công
          </span>
        </div>
      </form>
    </div>
  );
}
