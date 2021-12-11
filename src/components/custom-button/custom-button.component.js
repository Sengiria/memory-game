import './custom-button.styles.scss';

const CustomButton = ({ children, handleClick }) => {
    return (
        <button onClick={ handleClick } className='custom-button'>{ children }</button>
    );
}

export default CustomButton;