import React from 'react';

import { useQuery, gql } from '@apollo/client';

import Table from './PullRequestsTable';
import Storage from '../../utils/storage';
import { REPO } from '../../constats';

const GET_PULL_REQUESTS = gql`
query getPullRequests($cursor: String, $name: String!, $owner: String!) {
  repository(name: $name, owner: $owner) {
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
  }
}
`;

const PullRequests = () => {
  const [owner, name] = Storage.local.read(REPO).split('/');
  const {
    data, loading, error, fetchMore,
  } = useQuery(GET_PULL_REQUESTS, { variables: { name, owner } });
  const tableKeys = [
    { header: 'title', path: 'title' },
    { header: 'comments', path: 'comments.totalCount' },
    { header: 'state', path: 'state' },
    { header: 'createdAt', path: 'createdAt' },
    { header: 'author', path: 'author.login' }];


  return <Table tableKeys={tableKeys} data={data} />;
};
export default React.memo(PullRequests);
