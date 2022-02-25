import { useQuery } from "@apollo/client";
import React from "react";
import { IComment } from "../Types";

type IProps = IComment;

function SingleComment({ id, author, content, dislikes, likes }: IProps) {
  return <div className="comment-single">{content}</div>;
}

export default SingleComment;
