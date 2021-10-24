import React from "react";
import { GAME_PHASES } from "./constants";
import Fist from "./Fist";
import PlayerContainer from "./PlayerContainer";
import ActionContainer from "./ActionContainer";
import SelectedElement from "./SelectedElement";

const ComputerPlayer = ({ points, phase, selectionId }) => {
  
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
