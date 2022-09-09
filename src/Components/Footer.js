import React from "react";

function Footer(props){
  const footerStyles = {
    position: 'fixed',
    bottom: '0px'
  }
  return(
    <div style={footerStyles}>
      <h1>Footer</h1>
    </div>
  );
}

export default Footer;