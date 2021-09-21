import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

import { initializeGame, updateGameStatus } from "../actions";

export const Guess = () => {
  const randomNumber = useSelector((state) => state.gameStatus.randomNumber);
  const numberOfGuesses = useSelector((state) => state.gameStatus.numOfGuesses);
  let statusMessage = useSelector((state) => state.gameStatus.statusMessage);
  let hasWon = useSelector((state) => state.gameStatus.hasWon);
  const currentGuess = useRef(null);
  const dispatch = useDispatch();

  const evaluateCurrentGuess = () => {
    console.log("Current guess: ", currentGuess.current.value);
    if (parseInt(currentGuess.current.value) === randomNumber) {
      dispatch(
        updateGameStatus({
          statusMessage: `You won in ${numberOfGuesses + 1} guesses!`,
          hasWon: true,
        })
      );
    } else if (currentGuess.current.value > randomNumber) {
      dispatch(
        updateGameStatus({
          statusMessage: `${currentGuess.current.value} is too high. Try again.`,
          hasWon: false,
        })
      );
    } else {
      dispatch(
        updateGameStatus({
          statusMessage: `${currentGuess.current.value} is too low. Try again.`,
          hasWon: false,
        })
      );
    }
    console.log(statusMessage);

    currentGuess.current.value = "";
  };

  useEffect(() => {
    dispatch(initializeGame());
  }, []);

  return (
    <div>
      <div className="spacer10"></div>
      {/* <h2>{randomNumber}</h2> */}
      <div className="container-inner">
        <h3>Input your guess below:</h3>
        <br />
        <input className="h-input" type="text" ref={currentGuess} />
        <div className="spacer10"></div>
        <button className="h-btn" onClick={evaluateCurrentGuess}>
          Submit
        </button>
      </div>
      <h2>{statusMessage}</h2>

      {hasWon ? (
        <button
          className="h-btn"
          onClick={() => {
            dispatch(initializeGame());
          }}
        >
          Play Again ?
        </button>
      ) : (
        <h2>{`You Have Made ${numberOfGuesses} Guesses So Far`}</h2>
      )}
    </div>
  );
};
