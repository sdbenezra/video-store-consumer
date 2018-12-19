import React from 'react';
import PropTypes from 'prop-types';
import "./Customer.css"

const Customer = (props) => {
  const { name, movies_checked_out_count, customerCallback} = props;
  return (
    <div className="item">
      <div className="item_details">
        <h2>{props.name}</h2>
        <p></p>
        <p>{`${props.movies_checked_out_count} movies checked out`}</p>
        <button onClick={() => customerCallback()}>Select for Rental</button>
      </div>
    </div>
  )
}

Customer.propTypes = {
  name: PropTypes.string,
  movies_checked_out_count: PropTypes.number,
};

export default Customer;
