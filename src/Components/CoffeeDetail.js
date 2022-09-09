import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name}</h3>
      <p>Origin: {coffee.origin}</p>
      <p>Price: ${coffee.price}</p>
      <p>Roast: {coffee.roast}</p>
      <p>Quantity: {coffee.quantity} lb's</p>
      <button onClick={ props.onClickingSell }>Sell Coffee </button>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id)}>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  )
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;