import React from 'react';

import { useQuery } from '@apollo/client';

import Table from './IssuesTable';
import GET_REPO_INFO from '../../operations/queries/getRepoInfo';


const Issues = () => {
  const { data, loading, error } = useQuery(GET_REPO_INFO, { variables: { name: 'react', owner: 'facebook' } });

  if (data) {
    console.log(data.repository.issues);
  }
  return <Table />;
};
export default React.memo(Issues);
