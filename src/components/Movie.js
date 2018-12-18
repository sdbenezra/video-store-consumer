import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {



  return (
    <div>
    <p>{props.title}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Movie;
