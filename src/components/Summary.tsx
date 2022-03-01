import React from "react";
import { ISummary } from "../Types";

function Summary({ displaytitle, extract, extract_html, title }: ISummary) {
  return (
    <div>
      <h3>{displaytitle}</h3>
      <p>
        <blockquote
          dangerouslySetInnerHTML={{ __html: extract_html }}
        ></blockquote>
        via Wikipedia
      </p>
    </div>
  );
}

export default Summary;
