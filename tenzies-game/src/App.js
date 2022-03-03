import { useState, useEffect } from 'react';
import Die from './components/Die';
// Confetti effect component.
import Confetti from 'react-confetti';
import './App.scss';

function App() {

  /*
  This state will keep track of the ten dice.
  Initial state for dice is the array returned from the allNewDice function.
  */
  const [dice, setDice] = useState(allNewDice());
  // This state will track if the user has won the tenzies game.
  const [tenzies, setTenzies] = useState(false);

  // This will run upon loading, and every time the dice state changes.
  useEffect(() => {
    // allHeld will be a boolean based on if every object (die) in the dice state's array has an isHeld value of true.
    const allHeld = dice.every(die => die.isHeld);
    const firstDieValue = dice[0].value;
    // allDiceValue will be a boolean based on if every object (die) in the dice state's array has a value equal to firstValue.
    const allDiceValue = dice.every(die => firstDieValue === die.value);
    if(allHeld && allDiceValue) {
      setTenzies(true);
      console.log('You won!');
    }
  }, [dice]);

  // Returns one object.
  function newDie() {
    // randNum will be a random number between 1 and 6 inclusive.
    let randNum = Math.ceil(Math.random() * 6);
    let randId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    // Each object will have an id that is also a randomly generated number, a value which is the above random number, and isHeld as false.
    return {
      id: randId,
      value: randNum,
      isHeld: false
    }
  }

  // Returns an array of 10 objects.
  function allNewDice() {
    let newDiceArr = [];
    while (newDiceArr.length < 10) {
      // Adds an object created by the newDie function to the newDiceArr array.
      newDiceArr.push(newDie());
    }
    return newDiceArr;
  }

  // Re-rolls all non-held dice.
  function rollNewDice() {
    /*
    Similar to the below holdDice function.
    If the object's isHeld has a value of true, return the object as is.
    If the object's isHeld has a value of false, return a new object from the newDie function.
    */
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : newDie();
    }));
  }

  // Holds a die to avoid it from re-rolling.
  function holdDice(id) {
    /*
    Map over each object (die) in oldDice (previous dice state's array).
    If the parameter's id matches that object's id, return a spread copy of the object {...die} with the isHeld value's boolean flipped.
    If the parameter's id does not match the object's id, return the object as is.
    */
    setDice(oldDice => oldDice.map(die => {
      return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
    }))
  }

  // Resets the dice state to 10 objects with random values and isHeld set to false, and the tenzies state is false.
  function resetGame() {
    setDice(allNewDice());
    setTenzies(false);
  }

  /*
  Every object (die) in the dice state's array creates a Die component where props are passed (e.g. the value is the random number from 1 to 6). 
  Each component has a unique key tied to each object's id.
  Passed holdDice as a callback function with die.id added as a parameter. 
  */
  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />);

  return (
    <div className="App">
      {/* If tenzies is true, also display the Confetti component. */}
      {tenzies && <Confetti/>}
      <div className='description'>
        <h1 className='title'>Tenzies</h1>
        <p className='rules'>Roll until all dice are the same.</p>
        <p className='rules'>Click each die to freeze it at its current value.</p>
      </div>
      <div className='dice-container'>
        {/* Uses the mapped over components here. Note 10 components will be created because there are 10 objects in the dice state's array. */}
        {diceElements}
      </div>
      {/* If tenzies is true, display the 'New Game' button. If it is false, display the 'Roll Dice' button. */}
      {tenzies 
        ? 
        <button className='roll-dice' onClick={resetGame}>New Game</button>
        :
        <button className='roll-dice' onClick={rollNewDice}>Roll Dice</button>
      }
    </div>
  );
}

// Exports this component so it can be imported by other components.
export default App;

/*
Extra Ideas:

Replace numbers on dice with dots.
Track the number of rolls.
Track the time it took to win.
Create a leaderboard.
*/