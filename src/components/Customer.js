import React from 'react';
import PropTypes from 'prop-types';
import "./Customer.css"

const Customer = (props) => {
  return (
    <div className="customer__details">
      <p>{props.name}</p>
      <p></p>
      <p>{`${props.movies_checked_out_count} movies checked out`}</p>
    </div>
  )
}

Customer.propTypes = {
  name: PropTypes.string,
  movies_checked_out_count: PropTypes.number,
};

export default Customer;
