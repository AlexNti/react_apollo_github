import { gql } from '@apollo/client';


export const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId:$id }) {
      starrable {
        id
      }
    }
  }
`;

export const UNSTAR_REPOSITORY = gql`
  mutation($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
      }
    }
  }
`;
