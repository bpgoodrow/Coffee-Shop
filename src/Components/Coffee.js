import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
  <React.Fragment>
    <div onClick = {() => props.whenCoffeeClicked(props.id)}>
      <h3>{props.name}</h3>
      <p>Origin: {props.origin}</p>
      <p>Price: {props.price}</p>
      <p>Roast: {props.roast}</p>
      <p>Quantity: {props.quantity}</p>
    </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;