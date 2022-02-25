import { gql } from "@apollo/client";

export const StandingsQuery = gql`
  query {
    standings {
      id
      competition {
        name
      }
      standings {
        table {
          position
          points
          won
          draw
          lost
          team {
            name
            crestUrl
          }
        }
      }
    }
  }
`;
