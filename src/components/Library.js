import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class Library extends Component {
  constructor(props) {
    super();

    this.state = {
      movies: [],
    }
  }


  componentDidMount() {
    console.log("incomponedid mount");
    const GET_ALL_LIBRARY_URL = "http://localhost:3000/movies";
    axios.get(GET_ALL_LIBRARY_URL)
    .then((response) => {
      console.log(response.data);
      this.setState({
        movies: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });

  }



  render() {
    let movieData = this.state.movies;

    const movies = movieData.map((movie, i) => {
      return (
        <Movie
          key={movie.id}
          {...movie}
          />
      )

    });

    return(
      <div>
        <ul>
          <li>
            {movies}
          </li>
        </ul>
      </div>
    )
  }



}

export default Library;
