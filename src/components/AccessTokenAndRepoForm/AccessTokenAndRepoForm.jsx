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

const SubmitButton = styled(Button)(({
  disabled,
}) => ({
  border: '1px solid #DCDCDC',
  borderRadius: '5px',
  backgroundImage: 'linear-gradient(to right, #61a9ea 0, #407aad 100%)',
  ':active': {
    boxShadow: disabled ? undefined : 'rgba(0,0,0,.2) 0px 3px 5px -1px, rgba(0,0,0,.14) 0px 5px 8px 0px, rgba(0,0,0,.12) 0px 1px 14px 0px',
  },
}));

const AccessTokenAndRepoForm = () => {
  const [values, setValues] = React.useState({ repo: '', accessToken: '' });


  const onSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = React.useCallback((event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }, [values]);

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
      <SubmitButton type="submit">
        Load
      </SubmitButton>
    </Form>
  );
};
export default React.memo(AccessTokenAndRepoForm);
