import React from "react";
import InventoryList from "./InventoryList";
import CoffeeDetail from "./CoffeeDetail";
import NewCoffeeForm from "./NewCoffeeForm";
import EditCoffeeForm from "./EditCoffeeForm";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedCoffee: null
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null){
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newCoffee);
    this.setState({mainInventoryList: newMainInventoryList, formVisibleOnPage: false });
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainInventoryList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleDeletingCoffee = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(coffee => coffee.id !== id);
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedCoffee: null,
      editing: false
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainInventoryList = this.state.mainInventoryList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedCoffee: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;


    if (this.state.editing ) {      
      currentlyVisibleState = <EditCoffeeForm
        coffee = {this.state.selectedCoffee}
        onEditCoffee = {this.handleEditingCoffeeInList} />
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = 
      <CoffeeDetail 
        coffee = {this.state.selectedCoffee} 
        onClickingDelete = {this.handleDeletingCoffee} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Coffee List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      buttonText= "Return to Coffee List"
    } else {
      currentlyVisibleState = <InventoryList inventoryList={this.state.mainInventoryList} onCoffeeSelection={this.handleChangingSelectedCoffee} />;
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}
export default InventoryControl;