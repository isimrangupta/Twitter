import React, { useState } from "react";
import "../CSS/Tweet.css";

const Tweet = ({tweetId, content, likesCount, createdAt, onEdit}) => {
  const [isEditting, setIsEditting] = useState(false);

  return (
    <div className="tweet-wrapper">

      <div className="tweet-edit-wrapper">
        <div className="tweet-content">
         {
          (isEditting) ? (
          <input 
          type="text"
            value={content} 
          onChange={(e)=> {
            onEdit({
                id:tweetId,
                content: e.target.value,
                likesCount:likesCount,
                createdAt: createdAt,
              }
            )
          }}
            />

          ) : content
         }
        </div>

        <div>
          <button
          className="edit-tweet"
           onClick={() => setIsEditting(!isEditting)}>
            {isEditting ? "save" : "edit"}
          </button>
        </div>

      </div>

      <div className="like-createdAt-wrapper">
        <div className="likes">{likesCount} likes</div>

        <div className="created-at">
          <br /> Tweeted at <br />
          {createdAt}
        </div>
      </div>
    </div>
  );
};

export default Tweet;
