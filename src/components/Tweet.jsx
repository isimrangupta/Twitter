import React, { useState } from "react";
import "../CSS/Tweet.css";

const Tweet = ({ tweetId, content, likesCount, createdAt, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content); // ✅ Local state for editing

  return (
    <div className="tweet-wrapper">
      <div className="tweet-edit-wrapper">
        <div className="tweet-content">
          {isEditing ? (
            <input
              type="text"
              value={editedContent} // ✅ Local state se text dikh raha hai
              onChange={(e) => setEditedContent(e.target.value)} // ✅ Sirf local state update ho rahi hai
            />
          ) : (
            content
          )}
        </div>

        <div>
          <button
            className="edit-tweet"
            onClick={() => {
              if (isEditing) {
                onEdit({
                  id: tweetId,
                  content: editedContent, // ✅ Save hone pe updated content jayega
                  likesCount: likesCount,
                  createdAt: createdAt,
                });
              }
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? "Save" : "Edit"}
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
