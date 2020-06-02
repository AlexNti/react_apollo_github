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
  // const headerKeys = ['author', 'comments', 'createdAt', 'id', 'title'];
  const headerKeys = ['title', 'createdAt', 'id'];


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


  return <Table headerKeys={headerKeys} data={data} />;
};
export default React.memo(Issues);
