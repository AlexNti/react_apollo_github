import React from 'react';
import styled from '@emotion/styled';

import RepoField from './RepoField';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
});

const AccessTokenAndRepoForm = () => {
  const [repofieldValue, setRepofieldValue] = React.useState('');

  return (
    <Form>
      <RepoField
        name="repo"
        value={repofieldValue}
        onChange={(e) => setRepofieldValue(e.target.value)}
      />
    </Form>
  );
};
export default React.memo(AccessTokenAndRepoForm);
