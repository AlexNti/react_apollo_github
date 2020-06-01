import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

const RepoField = ({
  error,
  name,
  onChange,
  placeholder,
  value,
}) => (

  <Input error={error} name={name} value={value} placeholder={placeholder} onChange={onChange} />

);


RepoField.defaultProps = {
  error: '',
  placeholder: '',
  value: '',
};

RepoField.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,

};

export default React.memo(RepoField);
