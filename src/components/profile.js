import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  label: PropTypes.string,
  displayUserInfo: PropTypes.func
}

const Profile = ({ onClick, label, selected, displayUserInfo}) => {
  const classes = selected ? 'bold' : '';
  return (
    <div>
      <li onClick={ onClick } className={classes}>
        { label }
      </li>
      <button onClick={displayUserInfo}>Log User Info</button>
    </div>
  )
};

Profile.propTypes = propTypes;

export default Profile;
