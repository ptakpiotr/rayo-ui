import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { CommentQuery } from "../graphql/Query";
import { IComment } from "../Types";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import Push from "push.js";

function Comment() {
  const [comms, setComms] = useState<IComment[]>([]);
  const [conn, setConn] = useState<HubConnection>();

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

    connection.on("CommentAdded", (msg) => {
      let msgParsed = JSON.parse(msg);
      Push.create(`New message from ${msg.author}`, {
        body: msgParsed.content,
      });
      setComms((prev) => [...prev, msgParsed]);
    });
    setConn(connection);
  }, []);

  useEffect(() => {
    if (data) {
      setComms(data.newsComments);
    }

    if (error) {
      console.error(error);
    }
  }, [data, error]);

  return (
    <div className="comment-wrapper">
      <AddComment conn={conn as HubConnection} />
      {comms.map((c) => (
        <SingleComment
          key={`comm${c.id}${c.newsId}`}
          {...c}
          conn={conn as HubConnection}
        />
      ))}
    </div>
  );
}

export default Comment;
