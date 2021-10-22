export const MAX_ROUNDS = 10;

const GAME_RESULTS = {
  TIE: 0,
  LOST: -1,
  WIN: 1,
}
Object.freeze(GAME_RESULTS);

const GAME_RESULTS_TEXTS = new Map()
.set(GAME_RESULTS.WIN, "You won!")
.set(GAME_RESULTS.LOST, "You were beaten by AI")
.set(GAME_RESULTS.TIE, "It's a tie");

const GAME_PHASES = {
  INIT: 1,
  FIGHT: 2,
  RESULT: 3,
  FINAL: 4,
};
Object.freeze(GAME_PHASES);

const ELEMENTS = {
  PAPER: 1,
  SCISSORS: 2,
  STONE: 3,
};
Object.freeze(ELEMENTS);

export { ELEMENTS, GAME_PHASES, GAME_RESULTS, GAME_RESULTS_TEXTS }