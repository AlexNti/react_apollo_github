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
    border: '0',
    borderRadius: '0',
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


const ButtonRoot = ({
  onClick, children, height, width, ...props
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <BaseButton {...props} onClick={onClick} height={height} width={width}>
    {children}
  </BaseButton>
);


ButtonRoot.defaultProps = {
  height: '50px',
  width: '100px',
  onClick: () => {},

};

ButtonRoot.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,


};

export default ButtonRoot;
