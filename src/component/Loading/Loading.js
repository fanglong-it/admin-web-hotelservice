import React from "react";
import "./Loading.scss"
import image from "../../../src/assets/img/loading13.gif"
import { useSelector } from "react-redux";
import { loadingState$ } from "../../redux/selectors/LoadingSelector";
export default function Loading() {
  let isLoading = useSelector(loadingState$);
  if (isLoading) {
    return (
      <div className="bgLoading">
        <img src={image} alt="" />
      </div>
    );
  } else {
    return "";
  }
}
