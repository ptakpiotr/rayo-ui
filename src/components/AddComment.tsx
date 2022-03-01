import { HubConnection } from "@microsoft/signalr";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

interface IProps {
  conn: HubConnection;
}

function AddComment({ conn }: IProps) {
  const [comment, setComment] = useState<string>("");

  const { id } = useParams<any>();
  const [s, setS] = useState<string | null>(localStorage.getItem("email"));
  const handleClick = () => {
    if (comment.length > 1) {
      conn.invoke(
        "AddComment",
        JSON.stringify({
          author: s,
          content: comment,
          newsId: id,
        })
      );
      setComment("");
    }
  };

  return (
    <>
      {s == null ? (
        <div>Login in order to put comments</div>
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
}

export default AddComment;
