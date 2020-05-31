import React from 'react';
import styled from '@emotion/styled';

import AccessTokenAndRepoForm from '../../components/AccessTokenAndRepoForm';

const Layout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '20px',
  backgroundColor: '#F7F8F9',
});

const Header = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: '200px',
});

const Tabs = styled('div')({
  display: 'flex',
  width: '100%',
  height: '150px',
  alignSelf: 'center',
  flexDirection: 'row',
  backgroundColor: 'white',
});

const Main = () => (
  <Layout>
    <Header><AccessTokenAndRepoForm /></Header>
    <Tabs />
  </Layout>
);


export default Main;
