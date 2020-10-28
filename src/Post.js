import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar, date }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username} &bull; {date}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              {text.split('\n').map(str => <p>{str}</p>)}
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <i className="far fa-comment"  />
            <i className="fas fa-retweet" />
            <i className="far fa-heart" />
            <i className="fa fa-external-link-alt"></i>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
