import React from "react";
import "./HappyBDScreen.scss";
import DoneIcon from "@mui/icons-material/Done";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
export default function HappyBDScreen() {
  return (
    <div className="HapppBDScreen">
      <p className="greeting-title">Màn Hình Chúc Mừng Sinh Nhật</p>
      <form className="form-greeting">
        <input type="text" placeholder="Chúc mừng sinh nhật" />
        <div className="gender">
          <p style={{ color: "#888177", borderBottom: " 0.5px solid #888177" }}>
            Giới Tính:
          </p>
          <div className="gender-item">
            <p style={{ color: "#888177" }}>Nam</p>
            <input type="checkbox" />
          </div>
          <div className="gender-item">
            <p style={{ color: "#888177" }}>Nữ</p>
            <input type="checkbox" />
          </div>
        </div>
        <div className="greeting-display">
          <p
            style={{
              color: "#888177",
              borderBottom: " 0.5px solid #888177",
              marginRight: "20px",
              minWidth: "max-content",
            }}
          >
            Câu chào sẽ được hiển thị:
          </p>
          <p>Xin Chào Anh/Chị "Tên Khách Hàng"</p>
        </div>
        <div
          className="greeting-display"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p
            style={{
              color: "#888177",
              borderBottom: " 0.5px solid #888177",
              marginRight: "20px",
              minWidth: "max-content",
            }}
          >
            Nhạc:
            <QueueMusicIcon className="icon" />
          </p>
          {/* <label for="image_uploads">Choose images to upload (PNG, JPG)</label> */}
          <input
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, .jpeg, .png"
            multiple
          />
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
