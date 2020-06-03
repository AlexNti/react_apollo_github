import { gql } from '@apollo/client';


const GET_REPO_INFO = gql`
query getRepoInfo($cursor:String $name:String! $owner:String!) { 
    repository(name:$name owner:$owner){
      id
      viewerHasStarred
      pullRequests(first: 20, after: $cursor) {
        edges {
          node {
            id
            author{
                login
            }
            createdAt
            state
            title
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
      issues(first: 20, after: $cursor) {
        totalCount
        edges {
          node {
            id
          title
          createdAt
          state
          number
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
            description
            createdAt
            nameWithOwner
            stargazers{
            totalCount
          }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
   
  }
  `;


export default GET_REPO_INFO;
