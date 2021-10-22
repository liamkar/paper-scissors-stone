import React from "react";

const ActionContainer = ({ children, phase }) => {

  return (
    <>
    <div style={{display:'flex', flexDirection:'column'}}>
        <h4>Select next:</h4>
        {children}
    </div>
    </>
  );
};

export default ActionContainer;