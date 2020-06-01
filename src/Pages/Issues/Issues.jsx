import React from 'react';

// import { useQuery } from '@apollo/client';

import Table from './IssuesTable';
// import GET_REPO_INFO from '../../operations/queries/getRepoInfo';

const Issues = () => {
  console.log('issues');
  //   const { data, loading } = useQuery(GET_REPO_INFO);

  //   if (data) {
  //     console.log(data);
  //   }

  return <Table />;
};
export default React.memo(Issues);
