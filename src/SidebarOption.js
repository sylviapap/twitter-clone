import React from "react";

function SidebarOption({ active, text, Icon, mobileHidden }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"} ${mobileHidden && "mobileHidden"}`}>
      <Icon />
      <h2 className="sidebarText">{text}</h2>
    </div>
  );
}

export default SidebarOption;
