import { useState } from "react";
import { ELEMENTS, GAME_PHASES, GAME_RESULTS, MAX_ROUNDS } from './components/constants'
import End from './components/End'
import Start from './components/Start'
import HumanPlayer from './components/HumanPlayer'
import ComputerPlayer from './components/ComputerPlayer'
import RoundResults from './components/RoundResults'
import React from "react";

let elementsBeatMap = new Map()
.set(ELEMENTS.PAPER, ELEMENTS.STONE)
.set(ELEMENTS.SCISSORS, ELEMENTS.PAPER)
.set(ELEMENTS.STONE, ELEMENTS.SCISSORS);

const drawElement = () => {
  const elementKeys = Object.keys(ELEMENTS);
  return Math.floor(Math.random() * elementKeys.length) + 1;
};

const resolveResult = (elem1, elem2) => {
  if (elem1 === elem2) {
    return GAME_RESULTS.TIE;
  }
  if (elementsBeatMap.get(elem1) === elem2) {
    return GAME_RESULTS.WIN;
  }
  return GAME_RESULTS.LOST;
};

const App = () => {
  const [round, setRound] = useState(1);
  const [points, setPoints] = useState(0);
  const [enemyPoints, setEnemyPoints] = useState(0);
  const [gamePhase, setGamePhase] = useState(GAME_PHASES.INIT);
  const [selectedElementId, setSelectedElementId] = useState(0);
  const [selectedEnemyElementId, setSelectedEnemyElementId] = useState(0);
  const [roundResult, setRoundResult] = useState(0)

function fight(userSelectedId) {

  let computerSelectedId = drawElement();
  let result = resolveResult(userSelectedId, computerSelectedId)
  setRoundResult(result)

  setSelectedElementId(userSelectedId)
  setSelectedEnemyElementId(computerSelectedId)
  
  if (result === GAME_RESULTS.WIN) {
    setPoints(points+1)
  }

  else if (result === GAME_RESULTS.LOST) {
    setEnemyPoints(enemyPoints+1)
  }

  let nextGamePhase = GAME_PHASES.RESULT
  if (round === MAX_ROUNDS) {
    nextGamePhase = GAME_PHASES.FINAL
  }
  setGamePhase(nextGamePhase)
}

function startNextRound() {
  setRound(round+1)
  setGamePhase(GAME_PHASES.FIGHT)
}

function resetGame() {
  setRound(1)
  setPoints(0)
  setEnemyPoints(0)
  setGamePhase(GAME_PHASES.FIGHT)
}

  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      <h1>PAPER, SCISSORS, STONE</h1>
      {(gamePhase === GAME_PHASES.INIT) &&
        <Start onClick={setGamePhase}></Start> 
      }

      {(gamePhase === GAME_PHASES.FIGHT || gamePhase === GAME_PHASES.RESULT) &&
        <h3>Round: {round}/{MAX_ROUNDS}</h3> 
      }

      {(gamePhase === GAME_PHASES.FIGHT || gamePhase === GAME_PHASES.RESULT || gamePhase === GAME_PHASES.FINAL ) &&
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'50%'}}>          
          <HumanPlayer points={points} phase={gamePhase} fight={fight} selectionId={selectedElementId}/>
          <ComputerPlayer points={enemyPoints} phase={gamePhase} selectionId={selectedEnemyElementId}/>
        </div>
      }
      {(gamePhase === GAME_PHASES.RESULT ) &&
        <RoundResults onClick={startNextRound} result={roundResult}/>
      }

      {gamePhase === GAME_PHASES.FINAL &&
        <End points={points} enemyPoints={enemyPoints} onClick={resetGame}></End>
      }
      
    </div>
  );
};

export default App;
