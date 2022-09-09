import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value.charAt(0).toUpperCase() + event.target.name.value.slice(1),
      origin: event.target.origin.value.charAt(0).toUpperCase() + event.target.name.value.slice(1),
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }
  return (
    <React.Fragment>

      <ReusableForm
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Add Coffee" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;