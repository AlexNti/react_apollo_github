import React from 'react';

import { useQuery, gql } from '@apollo/client';

import Table from './ForksTable';
import Storage from '../../utils/storage';
import { REPO } from '../../constats';

const GET_FORKS = gql`
query getForks($cursor: String, $name: String!, $owner: String!) {
  repository(name: $name, owner: $owner) {
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

const Forks = () => {
  const [owner, name] = Storage.local.read(REPO).split('/');
  const {
    data, loading, error, fetchMore,
  } = useQuery(GET_FORKS, { variables: { name, owner } });
  if (error) {
    console.log(error);
  }
  const tableKeys = [
    { header: 'description', path: 'description' },
    { header: 'createdAt', path: 'createdAt' },
    { header: 'nameWithOwner', path: 'nameWithOwner' },
    { header: 'star count', path: 'stargazers.totalCount' }];


  return <Table tableKeys={tableKeys} data={data} />;
};
export default React.memo(Forks);
