import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';


const FieldBlock = styled('div')({
  alignItems: 'center',
  border: '1px solid black',
  borderRadius: 4,
  display: 'flex',
});

const Input = styled('input')(({ hasError }) => ({
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
    color: hasError ? 'red' : undefined,
  },
}));


const RepoField = ({
  error,
  name,
  onChange,
  placeholder,
  value,
}) => (
  <FieldBlock>

    <Input error={error} name={name} value={value} placeholder={placeholder} onChange={onChange} />

  </FieldBlock>
);


RepoField.defaultProps = {
  error: false,
  placeholder: '',
  value: '',
};

RepoField.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,

};

export default RepoField;
