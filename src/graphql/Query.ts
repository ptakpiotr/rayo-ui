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
export const NewsQuery = gql`
  query {
    news {
      id
      title
      photoUrl
      author
      content
      dateOfCreation
    }
  }
`;

export const CommentQuery = gql`
  query ($Id: Int!) {
    newsComments(id: $Id) {
      id
      likes
      dislikes
      author
      content
      newsId
    }
  }
`;
