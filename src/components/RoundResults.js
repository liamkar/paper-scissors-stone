import React from "react";
import { GAME_RESULTS_TEXTS } from './constants'
import FistIcon from './FistIcon'

const RoundResults = ({ result, onClick }) => {

  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
        <FistIcon/>
        <p>{GAME_RESULTS_TEXTS.get(result)}</p>
        <button onClick={onClick}>NEXT ROUND</button>
    </div>
  );
};

export default RoundResults;
