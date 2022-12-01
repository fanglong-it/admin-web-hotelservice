import React from "react";
import GreetingScreen from "../SettingScreen/GreetingScreen/GreetingScreen";
import HappyBDScreen from "../SettingScreen/HappyBDScreen/HappyBDScreen";
import WishScreen from "../SettingScreen/WishScreen/WishScreen";
import "./GreetingContainer";
export default function GreetingContainer() {
  return (
    <div className="GreetingContainer">
      <GreetingScreen />
      <HappyBDScreen/>
      <WishScreen/>
    </div>
  );
}
