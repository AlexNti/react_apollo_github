import React from 'react';

import { useQuery, gql } from '@apollo/client';

import Table from './IssuesTable';


const GET_ISSUES = gql`
query getIssues($cursor: String, $name: String!, $owner: String!) {
  repository(name: $name, owner: $owner) {
    issues(first: 20, after: $cursor) {
      totalCount
      edges {
        node {
          id
          title
          state
          number
          createdAt
          author {
            login
          }
          comments(last: 10) {
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

const Issues = () => {
  const {
    data, loading, error, fetchMore,
  } = useQuery(GET_ISSUES, { variables: { name: 'react', owner: 'facebook' } });
  const tableKeys = [
    { header: 'id', path: 'id' },
    { header: 'title', path: 'title' },
    { header: 'comments', path: 'comments.totalCount' },
    { header: 'state', path: 'state' },
    { header: 'number', path: 'number' },
    { header: 'createdAt', path: 'createdAt' },
    { header: 'author', path: 'author.login' }];


  // const loadMore = () => {
  //   const { issues } = data.repository;
  //   const cursor = issues.pageInfo.endCursor;
  //   fetchMore({
  //     variables: { name: 'react', owner: 'facebook' },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult) return prev;
  //       return { ...prev, feed: [...prev.feed, ...fetchMoreResult.feed] };
  //     },
  //   });
  // };


  return <Table tableKeys={tableKeys} data={data} />;
};
export default React.memo(Issues);
