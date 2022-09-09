import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function InventoryList(props) {
  return(
    <React.Fragment>
      {props.inventoryList.map((coffee) =>
        <Coffee
          whenCoffeeClicked = { props.onCoffeeSelection }
          name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          quantity={coffee.quantity}
          id={coffee.id}
          key={coffee.id}
          />

          )}
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default InventoryList;