import React from "react";
import ScoreBoard from './ScoreBoard'

const PlayerContainer = ({ header, points, children }) => {

  return (
    <section style={{display:'flex', flexDirection:'column'}}>
        <ScoreBoard header={header} points={points}/>
        {children}
    </section>
  );
};

export default PlayerContainer;