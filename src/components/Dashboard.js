import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Movies from './Movies';
import Customers from './Customers';
import Library from './Library';
import Home from './Home';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      customerName: " ",
      movieTitle: " ",
      message: "",
      showStatus: false,
    }
  }

  addCustomerName = (customer) => {
    this.setState({
      customerName: customer.name,
      customerID: customer.id,
    });
  };

  movieActionCallback = (movie) => {
    console.log(movie);
    let movieTitle = movie.title

    this.setState({
      movieTitle: movieTitle
    })
  }

  closeStatusBar = () => {
    console.log("status bar closed");
    this.setState({showStatus: false});
    console.log(this.state);
  }

  checkout = () => {
    console.log("rental button pressed");
    this.setState({
      showStatus: true,
      message: "Movie checked out",
    })
  }

  customerCountCallback = (count) => {
    this.setState({
      showStatus: true,
      message: `Loaded ${count} customers.`
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
            <button onClick={this.checkout}>
              Rental
            </button>
          </nav>

          <div>
              <div className={this.state.showStatus ? "status-bar status-bar--success" : "status-bar--hide"}>
                <p className={"status-bar__text"}>{this.state.message}</p>
                <button className="status-bar__button" onClick={this.closeStatusBar}>X</button>
              </div>
          </div>

          <Route path="/" exact component={Home} />
          <Route path="/search/" component={Movies} />

          <Route path="/library/"
            render={() => <Library movieActionCallback={this.movieActionCallback} />}
            />
          <Route path="/customers/" render={() => <Customers customerCallback={this.addCustomerName}
              customerCount={this.customerCountCallback}/>} />

        </div>

      </Router>
    )
  }

}




export default Dashboard;
