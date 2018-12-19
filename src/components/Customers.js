import React, { Component } from 'react';
import axios from 'axios';
import Customer from './Customer';
import './Customers.css';

class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    }
  }

  componentDidMount() {
      console.log("Component has mounted");
      const CUSTOMERS = "http://localhost:3000/customers"

      axios.get(CUSTOMERS)
      .then((response) => {
        this.setState({
          customers: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      });
      console.log(this.state.customers);
    }

    render(props){
      const customerList = this.state.customers.map((customer, i) => {
        return <Customer
          key={i}
          {...customer}
          customerCallback={() => this.props.customerCallback(customer)}
          />
      })

      return(
        <div className="item-list_container">
          {customerList}
        </div>

      );
    }
  }

export default Customers;
