import React from "react";
import Link from "@material-ui/core/Link";

function SidebarOption({ active, text, Icon, mobileHidden, href }) {
  return (
      <Link href={href} underline="none">
    <div className={`sidebarOption ${active && "sidebarOption--active"} ${mobileHidden && "mobileHidden"}`}>
      <Icon />
      <h2 className="sidebarText">{text}</h2>
    </div>
      </Link>
  );
}

export default SidebarOption;
