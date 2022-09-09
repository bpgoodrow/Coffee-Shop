import React from "react";

function Header(){
  const headerStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '10px',
    marginBottom: '10px'
    }
  return(
    <div style={headerStyles}>
      <h1>Cooper's Coffee Shop</h1>
    </div>
  )
}

export default Header;