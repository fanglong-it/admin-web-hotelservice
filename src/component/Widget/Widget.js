import React, { useEffect } from "react";
import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
export default function Widget({ type, amount, diff }) {
  let data;

  // //temporary
  // const amount = 0;
  // const diff = 0;
  // useEffect(() => {
  //   if(amount === ''){
  //     amount = 0;
  //   }
  // })

  switch (type) {
    case "dat_hom_nay":
      data = {
        title: "Đặt hôm nay",
        isMoney: false,
      };
      break;
    case "doanh_thu":
      data = {
        title: "Doanh thu",
        isMoney: true,
      };
      break;
    case "doanh_thu_luy_ke":
      data = {
        title: "Doanh thu luỹ kế",
        isMoney: true,
      };
      break;
    case "huy_hom_nay":
      data = {
        title: "Huỷ hôm nay",
        isMoney: false,
      };
      break;
    case "doanh_thu_huy":
      data = {
        title: "Doanh thu huỷ",
        isMoney: true,
      };
      break;
    case "doanh_thu_huy_luy_ke":
      data = {
        title: "Doanh thu huỷ luỹ kế",
        isMoney: false,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {amount === "" ? 0 : amount} {data.isMoney && " đ"}
        </span>
        <span className="link">{data.link}</span>
      </div>
      {/* <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div> */}
    </div>
  );
}
