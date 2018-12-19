import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Movies from './Movies';
import Customers from './Customers';
import Library from './Library';
import Home from './Home';

class Dashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      customerName: " ",
      movieTitle: " ",
    }

  }

  addCustomerName = (name) => {
    const newState = {};
    newState.customerName = name;
    this.setState(newState);
    console.log(newState.customerName);
  };

  movieActionCallback = (movie) => {
    console.log(movie);
    let movieTitle = movie.title

    this.setState({
      movieTitle: movieTitle
    })

  }


  render() {
    return(
      <Router>
        <div>
          <nav>
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              {this.state.movieTitle}
            </button>
            <button>
              <Link to="/search/">Search</Link>
            </button>
            <button>
              <Link to="/library/">Library</Link>
            </button>
            <button>
              <Link to="/customers/">Customers</Link>
            </button>
            <button>
              {this.state.customerName}
            </button>
            <button>
              Rental
            </button>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/search/" component={Movies} />

          <Route path="/library/"
            render={() => <Library movieActionCallback={this.movieActionCallback} />}
            />
          <Route path="/customers/" render={() => <Customers customerCallback={this.addCustomerName} />} />

        </div>

      </Router>
    )
  }

}




export default Dashboard;
