import { useState } from "react";

const AddTweet = ({ onAddTweet }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Add new tweet..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          onAddTweet(text);
          setText("");
        }}
      >
        Tweet !!
      </button>
    </>
  );
};

export default AddTweet;
