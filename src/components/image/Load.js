import React from 'react';
import PropTypes from 'prop-types';

function Load({ handleClick }) {
  return <button onClick={handleClick}>Random Pokemon</button>;
}

Load.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Load;



