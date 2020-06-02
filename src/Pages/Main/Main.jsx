import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import useRouter from '../../hooks/useRouter';
import Storage from '../../utils/storage';
import { REPO } from '../../constats';

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

const GET_TOTAL_COUNT = gql`
query getTotalCount($cursor: String, $name: String!, $owner: String!) {
  repository(name: $name, owner: $owner) {
    issues(first: 20, after: $cursor) {
      totalCount
    }
    forks(first: 20, after: $cursor) {
    totalCount
    }
    pullRequests(first: 20, after: $cursor){
      totalCount
    }
  }
 
}
`;

// TODO CREATE JSON OBJECT WITH CURRENT TABS
const Main = () => {
  const { history, location } = useRouter();
  const [selectedTab, setSelectedTab] = React.useState('');
  const [owner, name] = Storage.local.read(REPO).split('/');

  const {
    data, loading, error,
  } = useQuery(GET_TOTAL_COUNT, { variables: { name, owner } });


  useEffect(() => {
    if (selectedTab) history.push(`/${selectedTab}`);
  }, [selectedTab, history]);
  useEffect(() => { setSelectedTab(location.pathname.substring(1)); }, [location]);


  if (loading) return 'Loading...';

  const totalCountIssues = data.repository.issues.totalCount || 0;
  const totalCountForks = data.repository.forks.totalCount || 0;
  const totalCountPullRequests = data.repository.pullRequests.totalCount || 0;


  return (
    <Layout>
      <Header><AccessTokenAndRepoForm /></Header>
      <Tabs>
        <TabItem selectedTabId={selectedTab} count={totalCountIssues} tabName="Issues" id="issues" onClick={setSelectedTab} />
        <TabItem selectedTabId={selectedTab} count={totalCountPullRequests} tabName="Pull Request" id="pullrequests" onClick={setSelectedTab} />
        <TabItem selectedTabId={selectedTab} count={totalCountForks} tabName="Forks" id="forks" onClick={setSelectedTab} />
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
