import React from "react";
import { HubConnection } from "@microsoft/signalr";
import { IComment } from "../Types";

type IProps = IComment & {
  conn: HubConnection;
};

function SingleComment({ id, author, content, dislikes, likes, conn }: IProps) {
  const handleClick = (type: string) => {
    let obj = {
      id,
      likes: type === "LIKE" ? likes + 1 : likes,
      dislikes: type === "DISLIKE" ? dislikes + 1 : dislikes,
    };
    conn.invoke("ModifyComment", JSON.stringify(obj));
  };

  return (
    <div className="comment-single">
      {content}
      <br />
      <button
        onClick={() => {
          handleClick("LIKE");
        }}
        className="comment-button"
      >
        + {likes}
      </button>
      <button
        onClick={() => {
          handleClick("DISLIKE");
        }}
        className="comment-button"
      >
        - {dislikes}
      </button>
    </div>
  );
}

export default SingleComment;
