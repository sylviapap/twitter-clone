import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
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

        <TwitterTweetEmbed tweetId={"1320645053451169792"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sylviapapdev"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com"}
          options={{ text: "#reactjs is awesome", via: "sylviapapdev" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
