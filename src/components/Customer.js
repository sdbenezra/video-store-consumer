import React from 'react';

const Customer = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{`${props.movies_checked_out_count} movies checked out`}</p>
    </div>
  )
}

export default Customer;
