import React from "react";
import ElementList from './ElementList'
import { GAME_PHASES } from "./constants";
import PlayerContainer from './PlayerContainer'
import ActionContainer from './ActionContainer'
import SelectedElement from './SelectedElement'

const HumanPlayer = ({ points, phase, fight, selectionId }) => {  
  return (
    <PlayerContainer header='YOU' points={points}>

    {phase === GAME_PHASES.FIGHT &&
      <ActionContainer phase={phase}>
          <ElementList onClick={fight}/>
      </ActionContainer>
    }
    {(phase === GAME_PHASES.RESULT || phase === GAME_PHASES.FINAL) &&
      <SelectedElement selectionId={selectionId}/>
    }
    </PlayerContainer>
  );
};

export default HumanPlayer