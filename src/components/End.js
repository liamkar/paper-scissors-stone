import React from "react";
import { GAME_PHASES, GAME_RESULTS, GAME_RESULTS_TEXTS } from './constants'
import FistIcon from './FistIcon'

const End = ({ points, enemyPoints, onClick }) => {
  
  let pointDifference = points-enemyPoints;
  let result = GAME_RESULTS.TIE
  if (pointDifference < 0) {
    result = GAME_RESULTS.LOST
  }
  else if (pointDifference > 0) {
    result = GAME_RESULTS.WIN
  }

  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
        <FistIcon/>
        <h1>FIGHT OVER</h1>
        <h4>
            {GAME_RESULTS_TEXTS.get(result)}
        </h4>
        <h4>Keep on practicing to one day become a master in Paper, scissor, stones!</h4>
        <button onClick={() => onClick(GAME_PHASES.FIGHT)}>FIGHT AGAIN!</button>    
    </div>
  );
};

export default End;
