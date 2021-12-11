import './App.scss';
import CustomButton from './components/custom-button/custom-button.component';
import { useEffect, useState } from "react";
import cardsArray from './assets/cards.data';
import Card from './components/card/card.component';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [snow, setSnow] = useState([])

  const shuffleCards = () => {
    const shuffledCards = [...cardsArray, ...cardsArray] //duplicate items
      .sort(() => Math.random() - 0.5)  // negative => switch order, positive => do nothing
      .map(card => ({ ...card, matched: false, id: Math.random() })) // assign a random id

    setCards(shuffledCards)
    setTurns(0) //everytime we start a new game we call this function and reset turns
  }

  const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card)
    console.log(card)
  }

  useEffect(()=> {
    const snowflakes = []

    for(let i = 0; i < 40; i++){
      snowflakes.push(i.toString())
    }
  }, [])

  //fires when firstCard or secondCard change and when the component mounts
  useEffect(() => {
    if (secondCard) {
      setDisabled(true)
      if (firstCard.type === secondCard.type) {
        console.log('those cards match')

        setCards(prevCards => (
          prevCards.map(card => (
            card.type === secondCard.type ? { ...card, matched: true } : card
          ))
        ))

      } else {
        console.log('Those cards do not match')
      }
      setTimeout(()=>resetTurn(), 1000)
    }
  }, [secondCard])


  //reset chosen cards and increment number of turns
  const resetTurn = () => {
    setFirstCard(null)
    setSecondCard(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  return (
    <div className="App">

     <div class="snow layer1 a"></div>
     <div class="snow layer1"></div> 
     <div class="snow layer2 a"></div>
     <div class="snow layer2"></div>
     <div class="snow layer3 a"></div>
     <div class="snow layer3"></div>

      <h1 className='title'>Memory Game</h1>
      <CustomButton handleClick={shuffleCards}>New game</CustomButton>
      <p> Turns: {turns} </p>
      <div className='card-container'>
        {
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              isFlipped={card === firstCard || card === secondCard || card.matched}
              disabled={disabled}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
