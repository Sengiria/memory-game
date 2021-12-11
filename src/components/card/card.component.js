import './card.styles.scss';

const Card = (card, { handleChoice }) => {

    const handleClick = () => {
        handleChoice(card)
    }
    const { image } = card
    return (
        <div class="card">

        </div>

    );
}

export default Card;