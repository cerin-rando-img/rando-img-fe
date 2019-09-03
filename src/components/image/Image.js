import React from 'react';
import PropTypes from 'prop-types';

function Image({ image }) {
  return (
    <>
     <img src={image.image_url} />
     <h3>{image.pokemon}</h3>
    </>
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    pokemon: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired
  }).isRequired
};

