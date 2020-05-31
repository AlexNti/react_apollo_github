import React from 'react';
import styled from '@emotion/styled';

import Button from '../Button';

const BaseTabItem = styled('div')({
  display: 'flex',
  height: '100%',
  minWidth: '100px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '2px solid #F7F8F9',
  padding: '20px',
  position: 'relative',
  ':hover': { cursor: 'pointer' },

}, ({ isSelected }) => (isSelected ? {
  ':after': {
    content: '\'\'',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '3px',
    backgroundColor: '#5C66FF',
    backgroundImage: 'linear-gradient(to right, #61a9ea 0, #407aad 100%)',
    transition: '.3s ease-in-out',
    borderRadius: '2px',
  },
} : undefined));


const TabItem = ({
  id, selectedTabId, data, name, onClick,
}) => (
  <BaseTabItem isSelected={selectedTabId === id}>
    <Button>
      {name}
    </Button>
  </BaseTabItem>
);


export default TabItem;
