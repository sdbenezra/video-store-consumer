import React, { Component } from 'react';
import axios from 'axios';
import Customer from './Customer';
import './Customers.css';

class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      message: 'Loading customers...',
      showStatus: true,
    }
  }

  componentDidMount() {
      console.log("Component has mounted");
      const CUSTOMERS = "http://localhost:3000/customers";

      axios.get(CUSTOMERS)
      .then((response) => {
        this.setState({
          customers: response.data,
          message: `Loaded ${response.data.length} customers`,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      });
      console.log(this.state.customers);
    }

  closeStatus = () => {
    console.log("status bar closed");
    this.setState({showStatus: false});
    console.log(this.state);
  }

  render(){
    const customerList = this.state.customers.map((customer, i) => {
      return <Customer
          key={i}
          {...customer}
          customerCallback={() => this.props.customerCallback(customer)}
          />
      });

    return(
      <div>
        <div>
            <div className={this.state.showStatus ? "status-bar status-bar--success" : "status-bar--hide"}>
              <p className={"status-bar__text"}>{this.state.message}</p>
              <button className="status-bar__button" onClick={this.closeStatus}>X</button>
            </div>
        </div>
        <div className="item-list_container">
          {customerList}
        </div>
      </div>
    );
  }
}

export default Customers;
