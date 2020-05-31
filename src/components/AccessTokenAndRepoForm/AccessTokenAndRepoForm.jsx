import React from 'react';
import styled from '@emotion/styled';


const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
});

const AccessTokenAndRepoForm = () => (
  <Form>
    Here is form
  </Form>
);


export default React.memo(AccessTokenAndRepoForm);
