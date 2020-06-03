import React from 'react';

import { useQuery, gql } from '@apollo/client';

import Table from './IssuesTable';
import Storage from '../../utils/storage';
import { REPO } from '../../constats';
import LoadMoreButton from '../../components/LoadMoreButton';

const GET_ISSUES = gql`
query getRepoInfo($cursor: String, $name: String!, $owner: String!) {
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

const Issues = (props) => {
  const [owner, name] = Storage.local.read(REPO).split('/');
  const {
    data, loading, error, fetchMore,
  } = useQuery(GET_ISSUES, { variables: { name, owner } });

  const tableKeys = [
    { header: 'id', path: 'id' },
    { header: 'title', path: 'title' },
    { header: 'comments', path: 'comments.totalCount' },
    { header: 'state', path: 'state' },
    { header: 'number', path: 'number' },
    { header: 'createdAt', path: 'createdAt' },
    { header: 'author', path: 'author.login' }];


  const loadMore = () => {
    const { issues } = data.repository;
    const cursor = issues.pageInfo.endCursor;


    return fetchMore({
      variables: { name, owner, cursor },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.repository.issues.edges;
        const { pageInfo } = fetchMoreResult.repository.issues;
        return newEdges.length
          ? {
            // Put the new comments at the end of the list and update `pageInfo`
            // so we have the new `endCursor` and `hasNextPage` values
            repository: {
              __typename: previousResult.repository.__typename,
              issues: {
                __typename: previousResult.repository.issues.__typename,
                totalCount: fetchMoreResult.repository.issues.totalCount,
                edges:
                [...previousResult.repository.issues.edges, ...newEdges],
                pageInfo,
              },
            },
          }
          : previousResult;
      },
    });
  };

  return (
    <>
      <Table tableKeys={tableKeys} data={data} />
      <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
    </>
  );
};
export default React.memo(Issues);
