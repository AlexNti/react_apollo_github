import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';

import useRouter from '../../hooks/useRouter';

import AccessTokenAndRepoForm from '../../components/AccessTokenAndRepoForm';
import TabItem from '../../components/TabItem';
import IssuesPage from '../Issues';
import PullRequestPage from '../PullRequests';
import ForksPage from '../Forks';


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
  height: '130px',
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
  borderRadius: '2px',
});

const GitHubContent = styled('div')({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  marginTop: '20px',
});

// TODO CREATE JSON OBJECT WITH CURRENT TABS
const Main = () => {
  const { history, location } = useRouter();
  const [selectedTab, setSelectedTab] = React.useState('');


  useEffect(() => {
    if (selectedTab) history.push(`/${selectedTab}`);
  }, [selectedTab, history]);
  useEffect(() => { setSelectedTab(location.pathname.substring(1)); }, [location]);


  return (
    <Layout>
      <Header><AccessTokenAndRepoForm /></Header>
      <Tabs>
        <TabItem selectedTabId={selectedTab} tabName="Issues" id="issues" onClick={setSelectedTab} />
        <TabItem selectedTabId={selectedTab} tabName="Pull Request" id="pullrequests" onClick={setSelectedTab} />
        <TabItem selectedTabId={selectedTab} tabName="Forks" id="forks" onClick={setSelectedTab} />
      </Tabs>
      <GitHubContent>
        <Switch><Route path="/issues" component={IssuesPage} /></Switch>
        <Switch><Route path="/pullrequests" component={PullRequestPage} /></Switch>
        <Switch><Route path="/forks" component={ForksPage} /></Switch>


      </GitHubContent>
    </Layout>
  );
};
export default React.memo(Main);
