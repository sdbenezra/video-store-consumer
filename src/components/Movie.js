import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";


const Movie = (props) => {
  const {
    id, title, release_date, image_url, movieActionCallback
  } = props;



  return (
    <div className="library-container">
      <div className="item-list_container">
      <ul className="movie item">
        <img src={image_url}/>
        <div className="item_details">
          <h2>{title}</h2>
          <p>{release_date}</p>
        </div>

        <button
          onClick={() => movieActionCallback(props)}
          className="item_button">Select for Rental</button>
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
  movieActionCallback: PropTypes.func,
}

export default Movie;
