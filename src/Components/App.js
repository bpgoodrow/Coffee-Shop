import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import InventoryControl from "./InventoryControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <InventoryControl />
      <Footer />
    </React.Fragment>
  );
}

export default App;
