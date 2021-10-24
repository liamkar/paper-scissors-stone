import React from "react";
import Points from './Points'

const ScoreBoard = ({ header, points }) => {

  return (
    <section style={{display:'flex', flexDirection:'column'}}>
        <h4>{header}:</h4>
        <Points points={points}/>        
    </section>
  );
};

export default ScoreBoard;