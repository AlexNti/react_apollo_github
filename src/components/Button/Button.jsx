import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const disabledStyles = {
  cursor: 'not-allowed',
  opacity: 0.5,
  ':hover,:focus,:active,:disabled': {
    boxShadow: 'none',
  },
  ':hover,:focus': {
    opacity: 0.5,
  },
  ':active': {
    animation: 'none',
  },
};


const BaseButton = styled('button')(
  {

    appearance: 'none',
    background: 'inherit',
    border: '1px solid black',
    borderRadius: '5px',
    color: 'inherit',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    margin: 0,
    outline: 0,
    padding: 0,
    textAlign: 'center',
  },
  ({
    disabled, waiting, height, width,
  }) => (disabled || waiting
    ? { disabledStyles, width, height }
    : { width, height }),
);

const StyledButton = styled(BaseButton)(({
  disabled,
}) => ({
  backgroundImage: 'linear-gradient(to right, #EA8288 0, #EA82A7 100%)',
  ':active': {
    boxShadow: disabled ? undefined : 'rgba(0,0,0,.2) 0px 3px 5px -1px, rgba(0,0,0,.14) 0px 5px 8px 0px, rgba(0,0,0,.12) 0px 1px 14px 0px',
  },
}));

const Button = ({
  onClick, children, height, width,
}) => (
  <StyledButton onClick={onClick} height={height} width={width}>
    {children}
  </StyledButton>
);


Button.defaultProps = {
  height: '50px',
  width: '100px',

};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,


};

export default Button;
