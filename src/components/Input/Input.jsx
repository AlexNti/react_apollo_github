import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';


const FieldBlock = styled('div')(({ width }) => ({
  alignItems: 'center',
  border: '1px solid black',
  borderRadius: 4,
  width: `${width}px`,
  display: 'flex',
  height: '50px',
  marginRight: '10px',
}));

const Input = styled('input')(({ error }) => ({
  appearance: 'none',
  backgroundColor: '#FFFFFF',
  border: 0,
  borderRadius: 4,
  boxShadow: 'none',
  color: 'black',
  fontSize: '.9375rem',
  lineHeight: '24px',
  outline: 0,
  padding: '7px 8px', // account for top/bottom border
  width: '100%',
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
}) => (
  <FieldBlock width={width}>

    <Input error={error} name={name} value={value} placeholder={placeholder} onChange={onChange} />

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
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.number,

};

export default InputField;
