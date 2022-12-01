import React from "react";
import "./PopupSuccess.scss";
import image from "../../assets/img/404-tick.png";
import { useDispatch, useSelector } from "react-redux";
import { successState$ } from "../../redux/selectors/LoadingSelector";
import { HIDE_POPUP_SUCCESS } from "../../utils/constants/settingSystem";
export default function PopupSucess() {
  const dispatch = useDispatch();
  const isSuceess = useSelector(successState$);
  const closePopup = () => {
    dispatch({type:HIDE_POPUP_SUCCESS});
  };

  if (isSuceess) {
    return (
      <div className="popup">
        <img src={image} alt="" />
        <h2>Thành Công!</h2>
        <p>Thao tác của bạn đã thành công</p>
        <button type="button" onClick={closePopup}>
          OK
        </button>
      </div>
    );
  } else {
    return "";
  }
}
