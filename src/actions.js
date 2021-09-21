import { LOAD_DATA, INITIALIZE_GAME, UPDATE_GAME_STATUS } from "./types";

export const loadData = (data) => ({
  type: LOAD_DATA,
  data,
});

export const initializeGame = () => ({
  type: INITIALIZE_GAME,
});

export const updateGameStatus = (data) => ({
  type: UPDATE_GAME_STATUS,
  data,
});
