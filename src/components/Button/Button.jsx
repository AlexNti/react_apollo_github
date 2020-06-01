import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const disabledStyles = {
  cursor: 'not-allowed !important',
  opacity: 0.5,
  ':hover,:focus,:active,:disabled': {
    boxShadow: 'none !important ',
  },
  ':hover,:focus': {
    opacity: '0.5 !important',
  },
  ':active': {
    animation: 'none !important',
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
    disabled, height, width,
  }) => (disabled
    ? { ...disabledStyles, width, height }
    : { width, height }),

);


const ButtonRoot = ({
  onClick, children, height, width, disabled, ...props
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <BaseButton onClick={onClick} height={height} width={width} disabled={disabled} {...props}>
    {children}
  </BaseButton>
);
ButtonRoot.defaultProps = {
  height: '50px',
  width: '100px',
  onClick: () => {},
  disabled: false,

};

ButtonRoot.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,


};

export default ButtonRoot;
