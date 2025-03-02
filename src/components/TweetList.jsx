import Tweet from "./Tweet";
import "../CSS/TweetList.css";
import { memo } from "react";

const MemoisedTweet = memo(Tweet);

const TweetList = ({ tweets, onEditTweet }) => {
  return (
    <ul className="tweet-list">
      {tweets.map((tweet) => (
        <li className="tweet-like-wrapper" key={tweet.id}>
          <MemoisedTweet
            tweetId={tweet.id}
            content={tweet.content}
            likesCount={tweet.likesCount}
            createdAt={tweet.createdAt.toString()}
            onEdit={onEditTweet}
          />
        </li>
      ))}
    </ul>
  );
};

export default TweetList;
