import React from "react";

const ActionContainer = ({ children }) => {

  return (
    <section style={{display:'flex', flexDirection:'column'}}>
        <p>Select next:</p>
        {children}
    </section>
  );
};

export default ActionContainer;