import React from "react";
import {TwitterFollowButton, TwitterTimelineEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function RightPanel() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sylviapapdev"
          options={{height: 400}}
        />
        {/* <TwitterTweetEmbed tweetId="1306295949925343232" /> */}
        <TwitterFollowButton screenName="sylviapapdev" options={{size: 'large'}} />

      </div>
    </div>
  );
}

export default RightPanel;
