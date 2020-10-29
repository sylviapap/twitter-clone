import React from "react";
import {TwitterFollowButton, TwitterTimelineEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function RightPanel() {
  return (
    <div className="right-panel">
      <div className="search">
        <SearchIcon className="searchIcon" />
        <input id="search" placeholder="Search Twitter" type="text" name="name" autocomplete="off" />
      </div>

      <div className="widgetContainer">
        <h2>What's happening</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sylviapapdev"
          options={{height: 400}}
        />
        <TwitterFollowButton screenName="sylviapapdev" options={{size: 'large'}} />

      </div>
    </div>
  );
}

export default RightPanel;
