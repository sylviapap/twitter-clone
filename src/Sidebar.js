import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";

function Sidebar() {
  return (
    <div className="sidebar container">
      <Link href="/">
        <TwitterIcon className="sidebar__twitterIcon mobileHidden" />
      </Link>

    <div className="sidebar">
      <SidebarOption active Icon={HomeIcon} text="Home" href="/" />
      <SidebarOption Icon={SearchIcon} text="Explore" href="https://sylviapap.com/" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" href="https://github.com/sylviapap" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" href="https://www.linkedin.com/in/sylvia-pap/" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" mobileHidden href="/" />
      <SidebarOption Icon={ListAltIcon} text="Lists" mobileHidden href="/" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile"  href="/" />
      <SidebarOption Icon={MoreHorizIcon} text="More" mobileHidden href="https://dev.to/sylviapap" />

      <Button variant="outlined" className="sidebar__tweet mobileHidden" fullWidth href="/">
        Tweet
      </Button>
    </div>
    </div>
  );
}

export default Sidebar;
