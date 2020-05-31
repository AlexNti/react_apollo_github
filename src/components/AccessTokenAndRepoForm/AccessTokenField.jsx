import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

const AccessTokenField = ({
  error,
  name,
  onChange,
  placeholder,
  value,
}) => (

  <Input error={error} name={name} value={value} placeholder={placeholder} onChange={onChange} />

);


AccessTokenField.defaultProps = {
  error: '',
  placeholder: '',
  value: '',
};

AccessTokenField.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,

};

export default AccessTokenField;
