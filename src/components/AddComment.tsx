import React, { useState } from "react";

function AddComment() {
  const [comment, setComment] = useState<string>("");

  const handleClick = () => {
    if (comment.length > 1) {
      console.log(comment);
    }
  };

  return (
    <>
      <div className="comment-add">
        <input
          type="text"
          className="form-control"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder="Your comment: "
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleClick}>
          Add
        </button>
      </div>
    </>
  );
}

export default AddComment;
