import React from "react";

function Footer(props){
  const footerStyles = {
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '10px',
    marginRight: '10px'
  }
  return(
    <div style={footerStyles}>
      <h1>Footer</h1>
    </div>
  );
}

export default Footer;