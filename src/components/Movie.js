import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";


const Movie = (props) => {



  return (
    <div className="library-container">
      <div className="item-list_container">
        <div className="item_details">
        <img src={props.imageUrl}/>
          <h2>{props.title}</h2>
          <p>{props.releaseDate}</p>
        </div>
        <button className="item_button">Select for Rental</button>
      </div>
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
