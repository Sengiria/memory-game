import './card.styles.scss';

const Card = ({ card, handleChoice, isFlipped, disabled }) => {

    const { image } = card
    return (
        <div className={isFlipped ? "card flipped" : "card"}>
            <img
                className='card-front'
                alt="front"
                src={image}
            />
            <img
                className='card-back'
                alt="back"
                onClick={() => !disabled && handleChoice(card)}
                src="cards/cardback.jpg"
            />
        </div>


    );
}

export default Card;