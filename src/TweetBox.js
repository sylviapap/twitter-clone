import React from "react";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src="logo.png" />
          <input
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <Button
          href="/"
          type="submit"
          className="tweetBox-tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;