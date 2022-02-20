import React from "react";
import {
  SiCsharp,
  SiGraphql,
  SiHeroku,
  SiJsonwebtokens,
  SiRabbitmq,
  SiReact,
  SiRedux,
  SiTypescript,
  SiWindows95,
} from "react-icons/si";

function About() {
  return (
    <div>
      The page made by Piotr Ptak, the student of Applied Computer Science at
      AGH UST Technologies used in this project:
      <div className="technologies">
        <SiCsharp className="technology" />
        <SiGraphql className="technology" />
        <SiJsonwebtokens className="technology" />
        <SiRabbitmq className="technology" />
        <SiTypescript className="technology" />
        <SiReact className="technology" />
        <SiRedux className="technology" />
        <SiHeroku className="technology" />
        <SiWindows95 className="technology" />
      </div>
    </div>
  );
}

export default About;
