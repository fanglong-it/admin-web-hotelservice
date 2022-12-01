import React, { useEffect } from "react";
import Room from "./Room/Room";
import "./ListRoomContainer.scss";
import { useDispatch, useSelector } from "react-redux";
import { roomManageState$ } from "../../redux/selectors/RoomManageSelector";
import * as actions from "../../redux/actions/RoomManageAction"
export default function ListRoomContainer() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(actions.getAllRoom.getAllRoomRequest())
  },[dispatch])
  const listRoom = useSelector(roomManageState$)
  return (
    <div className="ListRoomContainer col-12">
      <div className="FillterRoom">
        <a href="#">
          <div className="FillterAll">
            <p>Tất Cả</p>
          </div>
        </a>
        <a href="#">
          <div className="FillterEmpty">
            <p>Trống</p>
          </div>
        </a>
        <a href="#">
          <div className="FillterNotEmpty">
            <p>Có Khách</p>
          </div>
        </a>
      </div>
      <div className="col-12 RoomContainer">
        <Room listRoom={listRoom} />
      </div>
    </div>
  );
}
