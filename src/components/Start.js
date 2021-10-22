import React from "react";
import { GAME_PHASES } from './constants'
import FistIcon from './FistIcon'

const Start = ({ onClick }) => {
  
  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
        <FistIcon/>
        <button onClick={() => onClick(GAME_PHASES.FIGHT)}>LET THE FIGHT BEGIN!</button>
    </div>
  );
};

export default Start;
