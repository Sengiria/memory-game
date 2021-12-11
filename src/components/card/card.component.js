import './card.styles.scss';

const Card = ({ card, handleChoice }) => {

    const { image } = card
    return (
        <div className="card">
            <div className="card_image">
                <img 
                className='front' 
                alt="front" 
                src={ image } 
                />
                <img 
                className='back' 
                alt="back"
                onClick={ () => handleChoice(card) } 
                src="cards/cardBack.jpg" 
                />
                </div>
        </div>

    );
}

export default Card;