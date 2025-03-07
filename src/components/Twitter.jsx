import { useState, useCallback, memo } from "react";
import TweetList from "./TweetList";
import AddTweet from "./AddTweet";

const initialDummyTweets = [
  {
    id: 0,
    content: "We have a new twitter called as threads",
    likesCount: 20,
    createdAt: new Date(),
  },
  {
    id: 1,
    content: "What should we post??",
    likesCount: 30,
    createdAt: new Date(),
  },
  {
    id: 2,
    content: "What is up with tech community?",
    likesCount: 90,
    createdAt: new Date(),
  },
];

const MemoisedAddTweet = memo(AddTweet);

const Twitter = () => {
  const [tweets, setTweets] = useState(initialDummyTweets);

  const handleAddTweet = useCallback(
    (text) => {
      let nextId = tweets.length > 0 ? tweets[tweets.length - 1].id + 1 : 0;

      setTweets([
        ...tweets,
        {
          content: text,
          likesCount: Math.floor(Math.random() * 10), // ✅ Random like count
          id: nextId,
          createdAt: new Date(),
        },
      ]);
    },
    [tweets]
  );

  const handleEditTweet = useCallback(
    (tweet) => {
      setTweets(
        tweets.map((currentTweet) =>
          currentTweet.id === tweet.id ? tweet : currentTweet
        )
      );
    },
    [tweets]
  );

  const sortTweets = useCallback(() => {
    const sortedTweets = [...tweets].sort(
      (t1, t2) => t2.createdAt.getTime() - t1.createdAt.getTime()
    );
    setTweets(sortedTweets);
  }, [tweets]);

  return (
    <>
      <MemoisedAddTweet onAddTweet={handleAddTweet} />
      <button onClick={sortTweets}>Sort Tweets By CreatedAt</button>
      <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
    </>
  );
};

export default Twitter;
