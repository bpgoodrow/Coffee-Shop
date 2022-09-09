import React, {useState} from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props;
  const [quantity, setQuantity] = useState(coffee.quantity);
  if (quantity > 0) {
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name}</h3>
      <p>Origin: {coffee.origin}</p>
      <p>Price: ${coffee.price}</p>
      <p>Roast: {coffee.roast}</p>
      <p>Quantity: {quantity} lb's</p>
      <button onClick={() => setQuantity(quantity - 1)}>Sell Coffee</button>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id)}>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  )
  } else {
    return (
      <React.Fragment>
        <h1>Coffee Detail</h1>
        <h3>{coffee.name}</h3>
        <p>Origin: {coffee.origin}</p>
        <p>Price: ${coffee.price}</p>
        <p>Roast: {coffee.roast}</p>
        <p>Quantity: Out of Stock</p>
        <button onClick={() => setQuantity(quantity)}>Sell Coffee</button>
        <button onClick={ props.onClickingEdit }>Update Coffee</button>
        <button onClick={()=> onClickingDelete(coffee.id)}>Delete Coffee</button>
        <hr/>
      </React.Fragment>
    )
  }
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;