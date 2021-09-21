import { LOAD_DATA, INITIALIZE_GAME, UPDATE_GAME_STATUS } from "../types";

const initialState = {
  uSStateData: [],
  gameStatus: {
    randomNumber: -999,
    numOfGuesses: -999,
    statusMessage: "Guess A Number Between 1 and 100",
    hasWon: false,
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      console.log(action.data);
      return { ...state, uSStateData: [...action.data.uSStateData] };
    case INITIALIZE_GAME:
      const newSeed = Math.floor(Math.random() * 100);
      console.log("Initializing game...", newSeed);
      return {
        ...state,
        gameStatus: {
          randomNumber: newSeed,
          numOfGuesses: 0,
          statusMessage: "Guess A Number Between 1 and 100",
          hasWon: false,
        },
      };
    case UPDATE_GAME_STATUS:
      return {
        ...state,
        gameStatus: {
          ...state.gameStatus,
          numOfGuesses: state.gameStatus.numOfGuesses + 1,
          statusMessage: action.data.statusMessage,
          hasWon: action.data.hasWon,
        },
      };
    default:
      return state;
  }
};

export default appReducer;
