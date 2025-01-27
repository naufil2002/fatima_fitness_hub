import React from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import { AppContext } from "../../App";

export default function ToggleTheme() {
  const { toggleTheme, theme, isBigWindow } = React.useContext(AppContext);

  const toggle_small =
    theme === "light-theme" ? (
      <FaRegSun className="sun--icon" />
    ) : (
      <FaRegMoon className="moon--icon" />
    );

  const toggle_icon = isBigWindow ? (
    <>
      <FaRegSun className="sun--icon" />
      <div className="bar">
        <div className="circle"></div>
      </div>
      <FaRegMoon className="moon--icon" />
    </>
  ) : (
    toggle_small
  );

  return (
    <div onClick={toggleTheme} className="toggle--theme">
      {toggle_icon}
    </div>
  );
}
