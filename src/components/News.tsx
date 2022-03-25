import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { NewsQuery } from "../graphql/Query";
import { INews } from "../Types";
import DynamicCard from "./DynamicCard";
function News() {
  const { client, data } = useQuery<any>(NewsQuery);
  const [loading, setLoading] = useState<boolean>(true);
  const [news, setNews] = useState<INews[]>([]);
  useEffect(() => {
    if (data) {
      localStorage.setItem("news", JSON.stringify(data.news));

      setNews(data.news);
      setLoading(false);
    }
  }, [data]);

  return (
    <Row>
      {loading ? (
        <div className="loader mx-auto"></div>
      ) : (
        news &&
        news.map((el) => (
          <Col md={4} key={`dynamic_card_${el.id}`}>
            <DynamicCard {...el} />
          </Col>
        ))
      )}
    </Row>
  );
}

export default News;
