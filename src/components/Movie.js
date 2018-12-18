import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";


const Movie = (props) => {



  return (
    <div className="library-container">
      <div className="item-list_container">
      <ul className="movie item">
        <img src={props.image_url}/>
        <div className="item_details">
          <h2>{props.title}</h2>
          <p>{props.release_date}</p>
        </div>

        <button className="item_button">Select for Rental</button>
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
}

export default Movie;
