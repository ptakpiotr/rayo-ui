import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { StandingsQuery } from "../graphql/Query";
import { StandingStanding, Welcome } from "../Types";

function Standings() {
  const { client, data } = useQuery(StandingsQuery);
  const [stan, setStandings] = useState<Welcome>();
  useEffect(() => {
    setStandings(data as Welcome);
  }, [data]);
  return (
    <div>
      {stan ? (
        <table className="table table-light table-striped mt-2">
          <thead>
            <tr>
              <th>Poz.</th>
              <th>Herb</th>
              <th>Nazwa</th>
              <th>Punkty</th>
              <th>W|R|P</th>
            </tr>
          </thead>
          <tbody>
            {stan.standings[0].standings[0].table.map((st) => (
              <tr>
                <td>{st.position}.</td>
                <td>
                  <img
                    src={st.team.crestUrl}
                    alt="TeamCrest"
                    style={{
                      maxWidth: "30px",
                    }}
                  />
                </td>
                {st.team.name == "Rayo Vallecano de Madrid" ? (
                  <td
                    style={{
                      fontWeight: "bold",
                      color: "maroon",
                    }}
                  >
                    {st.team.name}
                  </td>
                ) : (
                  <td>{st.team.name}</td>
                )}
                <td>{st.points}</td>
                <td>
                  {st.won} | {st.draw} | {st.lost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "No standings"
      )}
    </div>
  );
}

export default Standings;
