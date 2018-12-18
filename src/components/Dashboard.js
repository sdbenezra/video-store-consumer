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

  render() {
    return(
      <Router>
        <div>
          <nav>
              <button>
                <Link to="/">Home</Link>
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
                Rental
              </button>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/search/" component={Movies} />
          <Route path="/library/" component={Library} />
          <Route path="/customers/" component={Customers} />

        </div>

      </Router>
    )
  }

}

export default Dashboard;
