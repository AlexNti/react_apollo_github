import React,{ Suspense } from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import useRouter from '../../hooks/useRouter';
import Storage from '../../utils/storage';
import { REPO } from '../../constats';

import AccessTokenAndRepoForm from '../../components/AccessTokenAndRepoForm';
import TabItem from '../../components/TabItem';


const IssuesPage = React.lazy(() =>
  import('../Issues')
)
const PullRequestPage = React.lazy(() =>
  import('../PullRequests')
)
const ForksPage = React.lazy(() =>
  import('../Forks')
)

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
  height: '120px',
  marginBottom: '20px',
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

const GET_TOTAL_COUNT =  gql`
query getRepoInfo( $name: String!, $owner: String!) {
  repository(name: $name, owner: $owner) @client {

    issues(first: 20) {
      totalCount
    }
    forks(first: 20){
      totalCount
    }
    pullRequests(first:20){
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


  React.useEffect(() => {
    if (selectedTab) history.push(`/${selectedTab}`);
    if(!data) history.push("/")
  }, [selectedTab, history]);
  React.useEffect(() => { setSelectedTab(location.pathname.substring(1)); }, [location]);


  if (loading) return 'Loading...';

  if(error){
    console.log(error);
  }


  const totalCountIssues = error ? 0 : data && data.repository.issues.totalCount || 0;
  const totalCountForks = error ? 0 : data && data.repository.forks.totalCount || 0;
  const totalCountPullRequests = error ? 0 : data && data.repository.pullRequests.totalCount || 0;


  return (
    <Layout>
      <Header><AccessTokenAndRepoForm /></Header>
      {data && 
        <Tabs>
          <TabItem selectedTabId={selectedTab} count={totalCountIssues} tabName="Issues" id="issues" onClick={setSelectedTab} />
          <TabItem selectedTabId={selectedTab} count={totalCountPullRequests} tabName="Pull Request" id="pullrequests" onClick={setSelectedTab} />
          <TabItem selectedTabId={selectedTab} count={totalCountForks} tabName="Forks" id="forks" onClick={setSelectedTab} />
        </Tabs>}


      <GitHubContent>
        <Suspense  fallback={<div>Loading...</div>}>
          <Switch><Route path="/issues" component={IssuesPage} /></Switch>
          <Switch><Route path="/pullrequests" component={PullRequestPage} /></Switch>
          <Switch><Route path="/forks" component={ForksPage} /></Switch>
        </Suspense>
      </GitHubContent>

    </Layout>
  );
};
export default React.memo(Main);
