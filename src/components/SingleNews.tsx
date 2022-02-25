import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { INews } from "../Types";
import Comment from "./Comment";

interface IQueryString {
  id: string;
}

function SingleNews() {
  const { id } = useParams<IQueryString>();
  const [news, setNews] = useState<INews>({
    author: "Admin",
    content: "",
    dateOfCreation: new Date(),
    id: -1,
    photoUrl: "no_photo",
    title:
      "The article with the given id not found, please try again or search for different one",
  });

  useEffect(() => {
    let data = localStorage.getItem("news");
    if (data) {
      let localNews = JSON.parse(data);
      localNews = localNews.find((n: INews) => n.id === parseInt(id));
      setNews(localNews);
    }
  }, []);
  return (
    <main>
      <Row>
        <Col sm={8}>
          <img src={news.photoUrl} alt="Main img" className="img-news" />
          <h1>{news.title}</h1>
          <hr />
          <h3>by: {news.author}</h3>
          <br />
          <p>{news.content}</p>
        </Col>
        <Col sm={4}>
          <Comment />
        </Col>
      </Row>
    </main>
  );
}

export default SingleNews;
