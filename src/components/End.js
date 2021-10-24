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
    <section style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
        <FistIcon/>
        <h2>FIGHT OVER</h2>
        <p>{GAME_RESULTS_TEXTS.get(result)}</p>
        <p>Keep on practicing to one day become a master in Paper, scissors, stones!</p>
        <button onClick={() => onClick(GAME_PHASES.FIGHT)}>FIGHT AGAIN!</button>    
    </section>
  );
};

export default End;
