import React, { useEffect } from "react";
import "./OverviewContainer.scss";

import Navbar from "../Navbar/Navbar";
import Widget from "../Widget/Widget";
import Featured from "../Featured/Featured";
import Chart from "../Chart/Chart";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import * as bookingActions from "./../../redux/actions/BookingManageAction";

import HotelIcon from "@mui/icons-material/Hotel";
import { useDispatch, useSelector } from "react-redux";
import { getDashBoardState$ } from "../../redux/selectors/BookingManageSelector";
import moment from "moment";

export default function OverviewContainer() {
  const dispatch = useDispatch();
  const dashBoard = useSelector(getDashBoardState$);
  const currentDate = moment().format("DD/MM/yyyy");

  useEffect(() => {
    dispatch(
      bookingActions.getDashBoardOverview.getDashBoardOverviewRequest(
        currentDate
      )
    );
  }, [dispatch]);

  if (!dashBoard) return;

  return (
    <div className="homeContainer">
      <Navbar />
      <div className="widgets">
        <Widget type="dat_hom_nay" amount={dashBoard.bookedToday} />
        <Widget type="doanh_thu" amount={dashBoard.revenue} />
        <Widget type="doanh_thu_luy_ke" amount={dashBoard.accumulateRevenue} />
      </div>
      <div className="widgets">
        <Widget type="huy_hom_nay" amount={dashBoard.canceledToday} />
        <Widget type="doanh_thu_huy" amount={dashBoard.cancelRevenue} />
        <Widget
          type="doanh_thu_huy_luy_ke"
          amount={dashBoard.cancelAccumulateRevenue}
        />
      </div>

      <div className="widgetHotel">
        <div className="widgethotel">
          <div className="left">
            <span className="counter">{dashBoard.actualArriveToday}</span>
            <span className="title">Phòng đến trong ngày</span>
          </div>
          <div className="right">
            <div className="percentage positive">
              <HomeIcon />
              <DirectionsRunIcon />
            </div>
          </div>
        </div>

        <div className="widgethotel">
          <div className="left">
            <span className="counter">{dashBoard.actualDepartureToday}</span>
            <span className="title">Phòng đi trong ngày</span>
          </div>
          <div className="right">
            <div className="percentage positive">
              <DirectionsRunIcon />
              <HomeIcon />
            </div>
          </div>
        </div>

        <div className="widgethotel">
          <div className="left">
            <span className="counter">{dashBoard.roomBusy}</span>
            <span className="title">Phòng có khách</span>
          </div>
          <div className="right">
            <div className="percentage positive">
              <HotelIcon />
            </div>
          </div>
        </div>

        <div className="widgethotel">
          <div className="left">
            <span className="counter">{dashBoard.numOfStay}</span>
            <span className="title">Số khách ở</span>
          </div>
          <div className="right">
            <div className="percentage positive">
              <SupervisorAccountIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="charts">
        <Chart title="Doanh thu tháng" aspect={6 / 1} />
      </div>
      {/* <div className="charts">
        <Featured />
        <Featured />
      </div> */}
    </div>
  );
}
