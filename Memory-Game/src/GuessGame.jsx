import { useState, useEffect } from 'react';

function GuessGame() {
  const [level, setLevel] = useState(1);
  const [subLevel, setSubLevel] = useState(1);
  const [mistakes, setMistakes] = useState(0);
  const maxNumOfMistakes = 3;
  const [number, setNumber] = useState(generateRandomNumber());
  const [display, setDisplay] = useState(number);
  const [guess, setGuess] = useState('');
  const [time, setTime] = useState(5);
  const [lost, setLost] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * Math.pow(10, level)) + Math.pow(10, level - 1);
  }

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const gameLogic = () => {
    if (lost) return;
    if (!guess) return;
    
    if (parseInt(guess) !== number) {
      setMistakes((m) => m + 1);
    } else {
      setSubLevel((s) => ((s % 5) + 1));
      if (subLevel == 5) {
        setLevel(l => l + 1)
        setTime(t => Math.max(t - 1, 1));
      }
    }

    const randomNumber = generateRandomNumber()
    setNumber(randomNumber);
    setDisplay(randomNumber);

    if (mistakes === maxNumOfMistakes - 1) {
      setLost(true);
      // alert("you lost")
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    gameLogic();
    setGuess('');
  };
  
  const handleClick = () => {
    setTime(5);
    setLost(false);
    setLevel(1);
    setSubLevel(1);
    setMistakes(0);
    const randomNumber = generateRandomNumber()
    setNumber(randomNumber);
    setDisplay(randomNumber);
    setGuess('');
    gameLogic();
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplay('*'.repeat(number.toString().length));
    }, time * 1000);

    return () => clearTimeout(timeoutId);
  }, [number, time]);

const questionMark = (
  <pre className="game-ascii-art">
    {`
         ________
     _jgN########Ngg_
   _N##N@@""  ""9NN##Np_
  d###P            N####p
  "^^"              T####
                    d###P
                 _g###@F
              _gN##@P
            gN###F"
           d###F
          0###F
          0###F
          0###F
          "NN@'

           ___
          q###r
           """
   `}
  </pre>
);

  return (
    <div className="game">
      <div className="game-description">
        {questionMark}
        <p className="game-text">Welcome to my <span className="special-text">Memory Game!</span></p>
        <p className="game-text"><span className="special-text">Re-type</span> the number you see below.</p>
      </div>
    <div className="guessing-game">
      <div className="game-info">
        <p className="game-levels">Level: {level} - {subLevel}</p>
        <p className="game-mistakes">Wrong: {mistakes}/{maxNumOfMistakes}</p>
      </div>
      <p className="decoration"> {"#".repeat(50)} </p>
      <p className="game-display">{ lost ? "????" : display }</p>
      <p className="decoration"> {"#".repeat(50)} </p>
      <form onSubmit={handleSubmit} className="game-form">
        <label className="game-form-label">
        { lost ? "Better luck next time!" : 
              <>
                Number is: 
                <input className="game-form-input" value={guess} type="number" onChange={handleGuessChange} />
              </>
            }
        </label>
      </form>
      <button onClick={handleClick} className="restart-btn" >RESTART</button>
    </div>
    </div>
  );
}

export default GuessGame;
