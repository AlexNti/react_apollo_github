import styled from '@emotion/styled';

import Button from '../Button';

const LoadMoreButton = styled(Button)(({
  disabled,
}) => ({
  width: '100%',
  border: '1px solid #DCDCDC',
  borderRadius: '5px',
  backgroundImage: 'linear-gradient(to right, #61a9ea 0, #407aad 100%)',
  ':active': {
    boxShadow: disabled ? undefined : 'rgba(0,0,0,.2) 0px 3px 5px -1px, rgba(0,0,0,.14) 0px 5px 8px 0px, rgba(0,0,0,.12) 0px 1px 14px 0px',
  },
}));

export default LoadMoreButton;
