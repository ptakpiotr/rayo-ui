import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { CommentQuery } from "../graphql/Query";
import { IComment } from "../Types";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";
import { HubConnectionBuilder } from "@microsoft/signalr";

function Comment() {
  //temporarily set type to any --> no comments in the database yet
  const [comms, setComms] = useState<IComment[]>([]);
  const [conn, setConn] = useState<any>();

  const { data, error } = useQuery(CommentQuery, {
    variables: {
      Id: 1,
    },
  });

  useEffect(() => {
    let connection = new HubConnectionBuilder()
      .withUrl("https://localhost:7090/main", {
        accessTokenFactory: () => {
          return localStorage.getItem("authToken") as string;
        },
      })
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then(() => {
        console.log("Connection established");
      })
      .catch((err) => console.error(err));

    setConn(connection);
  }, []);

  useEffect(() => {
    if (data) {
      setComms(data.newsComments);
      console.log(data);
    }

    if (error) {
      console.error(error);
    }
  }, [data, error]);

  return (
    <div className="comment-wrapper">
      <AddComment />
      {comms.map((c) => (
        <SingleComment key={`comm${c.id}${c.newsId}`} {...c} />
      ))}
    </div>
  );
}

export default Comment;
