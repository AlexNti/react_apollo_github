import React from 'react';
import styled from '@emotion/styled';

import RepoField from './RepoField';
import AccessTokenField from './AccessTokenField';
import Button from '../Button';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
});

const FieldsWpapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  width: '100%',
  marginBottom: '10px',
});

const AccessTokenAndRepoForm = () => {
  const [values, setValues] = React.useState({ repo: '', accessToken: '' });


  const onSubmit = (event) => {
    event.preventDefault();
    console.log('clicked');
  };

  const handleInputChange = React.useCallback((event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }, [values.repo, values.accessToken]);

  return (
    <Form onSubmit={onSubmit}>
      <FieldsWpapper>
        <RepoField
          name="repo"
          value={values.repo}
          onChange={(event) => handleInputChange(event)}
          placeholder="Repo Name"
        />
        <AccessTokenField
          name="accessToken"
          value={values.accessToken}
          onChange={(event) => handleInputChange(event)}
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
