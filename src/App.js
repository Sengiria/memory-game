import './App.scss';
import CustomButton from './components/custom-button/custom-button.component';
import { useEffect, useState } from "react";
import cardsArray from './assets/cards.data';
import Card from './components/card/card.component';
import Victory from './components/victory/victory.component';
import BackgroundMusic from './components/background-music/background-music.component';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [gameWon, setGameWon] = useState(false)


  const shuffleCards = () => {
    setGameWon(false)
    const shuffledCards = [...cardsArray, ...cardsArray] //duplicate items
      .sort(() => Math.random() - 0.5)  // negative => switch order, positive => do nothing
      .map(card => ({ ...card, matched: false, id: Math.random() })) // assign a random id

    setCards(shuffledCards)
    setTurns(0) //everytime we start a new game we call this function and reset turns
  }

  const handleChoice = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card)
  }

  //fires when firstCard or secondCard change and when the component mounts
  useEffect(() => {
    if (secondCard) {
      setDisabled(true)
      if (firstCard.type === secondCard.type) {
        setCards(prevCards => (
          prevCards.map(card => (
            card.type === secondCard.type ? { ...card, matched: true } : card
          ))
        ))
      }
      setTimeout(()=>resetTurn(), 1000) 
    }

    if(secondCard === null) endGame()
  }, [secondCard])

  //reset chosen cards and increment number of turns
  const resetTurn = () => {
    setFirstCard(null)
    setSecondCard(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  const endGame = () => {
    if(cards.length > 0){
      const gameOver = cards.every((card)=>(
        card.matched === true
      ))
      if( gameOver ) {
        setGameWon(true)
        setCards([])
      }
    }
  }

  return (
    <div className="App">

     <div className="snow layer1 a"></div>
     <div className="snow layer1"></div> 
     <div className="snow layer2 a"></div>
     <div className="snow layer2"></div>
     <div className="snow layer3 a"></div>
     <div className="snow layer3"></div>

      <h1 className='title'>Memory Game</h1>
      <CustomButton handleClick={shuffleCards}>New game</CustomButton>
      <h2 className='subtitle'> Turns: {turns} </h2>
      {
        gameWon && <Victory />
      }
      <BackgroundMusic url="https://play.publicradio.org/web/o/minnesota/classical/programs/free-downloads/2018/10/18/daily_download_20181018_128.mp3" />
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
