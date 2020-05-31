import React from 'react';
import styled from '@emotion/styled';

import AccessTokenAndRepoForm from '../../components/AccessTokenAndRepoForm';
import TabItem from '../../components/TabItem';

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
  height: '100px',
  alignSelf: 'center',
  flexDirection: 'row',
  backgroundColor: 'white',
  boxShadow: '2px 4px 5px 0px rgba(0,0,0,0.75)',

});
// TODO CREATE JSON OBJECT WITH CURRENT TABS
const Main = () => {
  const [selectedTab, setSelectedTab] = React.useState(1);
  return (
    <Layout>
      <Header><AccessTokenAndRepoForm /></Header>
      <Tabs>
        <TabItem selectedTabId={selectedTab} name="Issues" id={1}>ciao</TabItem>
        <TabItem selectedTabId={selectedTab} name="Pull Request" id={2}>Hello</TabItem>
        <TabItem selectedTabId={selectedTab} name="Forks" id={3}>bye</TabItem>
      </Tabs>
    </Layout>
  );
};
export default Main;
