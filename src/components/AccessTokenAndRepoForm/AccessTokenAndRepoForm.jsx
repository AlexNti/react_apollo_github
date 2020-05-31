import React from 'react';
import styled from '@emotion/styled';

import RepoField from './RepoField';
import AccessTokenField from './AccessTokenField';
import Button from '../Button';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'columns',
  overflow: 'hidden',
  width: '100%',
});

const FieldsWpapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  width: '100%',
});

const AccessTokenAndRepoForm = () => {
  const [repofieldValue, setRepofieldValue] = React.useState('');
  const [accessTokenValue, setAccessTokenValue] = React.useState('');

  const onSubmit = React.useCallback((e) => {
    e.preventDefault();
    console.log('clicked');
  });

  return (
    <Form onSubmit={onSubmit}>
      <FieldsWpapper>
        <RepoField
          name="repo"
          value={repofieldValue}
          onChange={(e) => setRepofieldValue(e.target.value)}
          placeholder="Repo Name"
        />
        <AccessTokenField
          name="AccessToken"
          value={accessTokenValue}
          onChange={(e) => setAccessTokenValue(e.target.value)}
          placeholder="Access Token"
        />
      </FieldsWpapper>
      <Button type="submit">
        Load
      </Button>
    </Form>
  );
};
export default React.memo(AccessTokenAndRepoForm);
