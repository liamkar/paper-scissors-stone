import React from "react";
import Points from './Points'

const ScoreBoard = ({ header, points }) => {

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <h4>{header}:</h4>
        <Points points={points}/>        
    </div>
  );
};

export default ScoreBoard;