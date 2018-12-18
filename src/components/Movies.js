import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import axios from 'axios';
import Movie from './Movie';


class Movies extends Component {
  constructor(props) {
    super();

    this.state = {
      movies: [],
      query: '',
    };
  };


  searchMovie = (queryInput) => {
    console.log(queryInput.query);
    const url = `http://localhost:3000/movies?query=${queryInput.query}`
    console.log(url);
    axios.get(url)
    .then((response) => {
      console.log(response.data);
      this.setState({
        movies: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error,
      });
    });
    console.log(this.state.movies);
  };


  render() {

    const moviesList = this.state.movies.map((movie, i) => {
      return (
        <Movie
          key={i}
         {...movie}
          />
      );
    });

    return(
      <div>
        <h1>TEST in Movies </h1>
        <SearchForm searchQueryCallback={this.searchMovie}/>
        <ul>
          {moviesList}
        </ul>

      </div>

    );


  };



};

export default Movies
