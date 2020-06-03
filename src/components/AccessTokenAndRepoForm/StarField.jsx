import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import unstar from '../../assets/star-empty.svg';
import star from '../../assets/star-yellow.svg';

const StarField = ({ isStarred, onClick }) => (
  <Button width="30px" height="30px" onClick={onClick}>
    <img
      src={isStarred ? star : unstar}
      alt=""
      width={30}
      height={30}
      style={{ display: 'block' }}
    />
  </Button>
);

StarField.defaultProps = {
  isStarred: false,
  onClick: () => {},

};

StarField.propTypes = {
  onClick: PropTypes.func,
  isStarred: PropTypes.bool,


};


export default React.memo(StarField);
