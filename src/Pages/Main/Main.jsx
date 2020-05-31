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

const Tabs = styled('div');

const Main = () => (
  <Layout>
    <Header><AccessTokenAndRepoForm /></Header>
  </Layout>
);


export default Main;
