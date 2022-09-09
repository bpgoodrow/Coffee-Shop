import React from "react";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      MainInventoryList: [],
      selectedCoffee: null
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null){
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
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

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <newCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      buttonText= "back to coffee list"
    } else {
      currentlyVisibleState = <InventoryList inventoryList={this.state.MainInventoryList} onCoffeeSelection={this.handleChangingSelectedCoffee} />;
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