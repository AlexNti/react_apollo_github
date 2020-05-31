import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import Button from '../Button';

const BaseTabItem = styled('div')({
  display: 'flex',
  height: '100%',
  minWidth: '120px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '3px solid #F7F8F9',
  position: 'relative',
  ':hover': { cursor: 'pointer' },
  color: '#ADB5C2',
  fontSize: '16px',
  fontWeight: 'bold',


}, ({ isSelected }) => (isSelected ? {
  color: '#61a9ea',
  ':after': {
    content: '\'\'',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '3px',
    backgroundColor: '#5C66FF',
    backgroundImage: 'linear-gradient(to right, #61a9ea 0, #407aad 100%)',
    borderRadius: '2px',
    transition: 'height 1.2s ease-out',
  },
} : undefined));

const TabButton = styled(Button)(({
  disabled,
}) => ({
  width: '100%',
  height: '100%',
  ':active': {
    backgroundColor: disabled ? undefined : '#e5e5e5',
  },
}));

const TabContent = styled('div')({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'space-evenly',
});

const TabName = styled('div')({
  fontSize: '16px',
});

const TabData = styled('div')({
  fontSize: '16px',
});

// TODO ADD TRANSITION TO UNDERLINE
const TabItem = ({
  id, selectedTabId, data, tabName, onClick,
}) => (
  <BaseTabItem isSelected={selectedTabId === id}>
    <TabButton onClick={() => { onClick(id); }}>
      <TabContent>
        <TabData>
          Data
        </TabData>
        <TabName>
          {tabName}
        </TabName>
      </TabContent>
    </TabButton>
  </BaseTabItem>
);


TabItem.defaultProps = {
  data: {},
};


TabItem.propTypes = {
  id: PropTypes.number.isRequired,
  selectedTabId: PropTypes.number.isRequired,
  tabName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,

};


export default React.memo(TabItem);
