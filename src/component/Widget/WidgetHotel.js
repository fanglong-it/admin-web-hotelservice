import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
export default function WidgetHotel({ type }) {
  let hotel;

  //temporary
  const quantity = 0;
  const diff = 0;

  switch (type) {
    case "phong_den_trong_ngay":
      hotel = {
        title: "Phòng đến trong ngày",
        isMoney: false,
      };
      break;
    case "phong_di_trong_ngay":
      hotel = {
        title: "Phòng đi trong ngày",
        isMoney: false,
      };
      break;
    case "phong_co_khach":
      hotel = {
        title: "Phòng có khách",
        isMoney: false,
      };
      break;
    case "phong_khach_o":
      hotel = {
        title: "Phòng khách ở",
        isMoney: false,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widgethotel">
      <div className="left">
        <span className="counter">{quantity}</span>
        <span className="title">{hotel.title}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <HomeIcon />
          <DirectionsRunIcon />
        </div>
      </div>
    </div>
  );
}
