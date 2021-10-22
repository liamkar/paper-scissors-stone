import React from "react";
import ScoreBoard from './ScoreBoard'

const PlayerContainer = ({ header, points, children }) => {

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <ScoreBoard header={header} points={points}/>
        {children}
    </div>
  );
};

export default PlayerContainer;