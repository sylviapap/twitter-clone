import React from "react";
import {TwitterFollowButton, TwitterTimelineEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const RightPanel = () => {
  const handleSubmit = () => {document.location.reload()}
  return (
    <div className="right-panel">
      <div className="search">
        <SearchIcon className="searchIcon" />
        <form onSubmit={handleSubmit}>
        <input 
          id="search" 
          placeholder="Search Twitter" 
          type="text" 
          autoComplete="off" 
        />
        </form>
      </div>

      <div className="widgetContainer">
        <h2>What's happening</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sylvialpap"
          options={{height: 400}}
        />
        <TwitterFollowButton screenName="sylvialpap" options={{size: 'large'}} />

      </div>
    </div>
  );
}

export default RightPanel;
