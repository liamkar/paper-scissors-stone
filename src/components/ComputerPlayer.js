import React from "react";
//import Points from './Points'
import { GAME_PHASES } from "./constants";
import Fist from "./Fist";
import PlayerContainer from "./PlayerContainer";
import ActionContainer from "./ActionContainer";
import SelectedElement from "./SelectedElement";

const ComputerPlayer = ({ points, phase, selectionId }) => {
  /*
<div style={{display:'flex', flexDirection:'column'}}>
        <h4>ARTIFICIAL INTELLIGENCE:</h4>
        <Points points={points}/>        
        <h4>Select next:</h4>
        <Fist mirror={true}/>
    </div>
    */

  return (
    <PlayerContainer header="SUPER AI" points={points}>
      {phase === GAME_PHASES.FIGHT && (
        <ActionContainer phase={phase}>
          <Fist mirror={true} />
        </ActionContainer>
      )}
      {(phase === GAME_PHASES.RESULT || phase === GAME_PHASES.FINAL) &&
        <SelectedElement selectionId={selectionId} />
      }
    </PlayerContainer>
  );
};

export default ComputerPlayer;
