import './App.scss';
import CustomButton from './components/custom-button/custom-button.component';
import { useEffect, useState, useRef } from "react";
import cardsArray from './assets/cards.data';
import Card from './components/card/card.component';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const shuffleCards = () => {
    const shuffledCards = [...cardsArray, ...cardsArray] //duplicate items
        .sort(() => Math.random() - 0.5)  // negative => switch order, positive => do nothing
        .map(card => ({ ...card, id: Math.random() })) // assign a random id

    setCards(shuffledCards)
    setTurns(0) //everytime we start a new game we call this function and reset turns
}

const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card)
    console.log(card)
}

  return (
    <div className="App"> 
    <h1>Memory Game</h1>
    <CustomButton handleClick={ shuffleCards }>New game</CustomButton>
    <p> Turns: {turns} </p>
    <div className='card-container'>
            {
                cards.map(({id, ...otherProps}) => (
                    <Card key={id} {...otherProps} handleChoice={ handleChoice } />
                ))
            }
        </div>
    </div>
  );
}

export default App;
