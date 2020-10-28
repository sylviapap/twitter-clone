import React from "react";
import {TwitterFollowButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId="1291925543231688704" />
        <TwitterFollowButton screenName="sylviapapdev" options={{size: 'large'}} />

      </div>
    </div>
  );
}

export default Widgets;
