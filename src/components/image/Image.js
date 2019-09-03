import React from 'react';
import PropTypes from 'prop-types';

function Image({ image }) {
  return (
    <>
     <img src={image.url_image} />
     <h3>{image.pokemon}</h3>
    </>
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    pokemon: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired
  }).isRequired
};

export default Image;

