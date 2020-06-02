import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

const AccessTokenField = ({
  error,
  name,
  onChange,
  placeholder,
  value,
  type,
}) => (

  <Input
    type={type}
    error={error}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />

);


AccessTokenField.defaultProps = {
  error: '',
  placeholder: '',
  value: '',
  type: 'text',
};

AccessTokenField.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,

};

export default React.memo(AccessTokenField);
