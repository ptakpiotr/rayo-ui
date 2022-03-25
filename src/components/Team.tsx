import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import wiki from "wikipedia";
import { ISummary } from "../Types";
import Infobox from "./Infobox";
import Summary from "./Summary";

function Team() {
  const [loading, setLoading] = useState<boolean>(true);
  const [summaryData, setSummaryData] = useState<ISummary>({
    displaytitle: "",
    extract: "",
    extract_html: "",
    originalimage: {
      height: 0,
      source: "",
      width: 0,
    },
    title: "",
  });

  useEffect(() => {
    const callRayoPage = async (pageName: string) => {
      try {
        const page = await wiki.page(pageName);
        const summary = await page.summary();

        setSummaryData(summary);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    callRayoPage("Rayo_Vallecano");
  }, []);

  return (
    <main>
      {loading ? (
        <div className="loader mx-auto"></div>
      ) : (
        <Row>
          <Col sm={8}>
            <Summary {...summaryData} />
          </Col>
          <Col sm={4}>
            <Infobox
              image={summaryData.originalimage.source}
              page={"http://www.rayovallecano.es/"}
            />
          </Col>
        </Row>
      )}
    </main>
  );
}

export default Team;
