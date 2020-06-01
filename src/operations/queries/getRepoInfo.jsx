import { gql } from '@apollo/client';


const GET_REPO_INFO = gql`
query getRepoInfo($cursor:String $name:String! $owner:String!) { 
    repository(name:$name owner:$owner){
      pullRequests(first: 20, after: $cursor) {
        edges {
          node {
            id
          }
        }
      }
      issues(first: 20, after: $cursor) {
        totalCount
        edges {
          node {
            id
          title
          createdAt
          author{
            login
          }
          comments(last:10) {
            totalCount
            edges {
              node {
                id
              }
            }
          }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
      forks(first: 20, after: $cursor) {
        edges {
          node {
            id
          }
        }
      }
    }
   
  }
  `;


export default GET_REPO_INFO;
