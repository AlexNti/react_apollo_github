import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';


const FieldBlock = styled('div')(({ width, error }) => ({
  alignItems: 'center',
  border: error ? '1px solid red' : '1px solid',
  borderRadius: 4,
  width: `${width}px`,
  display: 'flex',
  height: '50px',
  marginRight: '10px',
  position: 'relative',
}));

const Input = styled('input')(({ error }) => ({
  appearance: 'none',
  backgroundColor: '#FFFFFF',
  position: 'relative',
  border: 0,
  borderRadius: 4,
  boxShadow: 'none',
  color: 'black',
  fontSize: '15px',
  outline: 0,
  padding: '7px 8px', // account for top/bottom border
  width: '100%',
  height: '100%',
  '::placeholder': {
    color: error ? 'red' : undefined,
  },
}));

const InputField = ({
  error,
  name,
  onChange,
  placeholder,
  value,
  width,
  ...props
}) => (
  <FieldBlock width={width}>

    <Input
      {...props}
      error={error}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />


  </FieldBlock>
);


InputField.defaultProps = {
  error: '',
  placeholder: '',
  value: '',
  width: 250,
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.number,

};

export default InputField;
