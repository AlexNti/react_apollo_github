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
  height: '120px',
  alignSelf: 'center',
  flexDirection: 'row',
  backgroundColor: 'white',
  boxShadow: '2px 4px 5px 0px rgba(0,0,0,0.75)',
  boxSizing: 'border-box',

});
// TODO CREATE JSON OBJECT WITH CURRENT TABS
const Main = () => {
  const [selectedTab, setSelectedTab] = React.useState(1);
  return (
    <Layout>
      <Header><AccessTokenAndRepoForm /></Header>
      <Tabs>
        <TabItem selectedTabId={selectedTab} tabName="Issues" id={1} onClick={setSelectedTab} />
        <TabItem selectedTabId={selectedTab} tabName="Pull Request" id={2} onClick={setSelectedTab} />
        <TabItem selectedTabId={selectedTab} tabName="Forks" id={3} onClick={setSelectedTab} />
      </Tabs>
    </Layout>
  );
};
export default Main;
