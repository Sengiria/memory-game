import GameActionTypes from "./constants";

const INITIAL_STATE = {
    cards: [],
    turns: 0,
    firstCard: null,
    secondCard: null,
    disabled: false,
    gameWon: false
}

const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GameActionTypes.SET_CARDS:
            return {
                ...state,
                cards: action.payload
            }
        case GameActionTypes.INCREMENT_TURNS:
            return {
                ...state,
                turns: state.turns + 1
            }
        case GameActionTypes.SET_FIRST_CARD:
            return {
                ...state,
                firstCard: action.payload
            }
        case GameActionTypes.SET_SECOND_CARD:
            return {
                ...state,
                secondCard: action.payload
            }
        case GameActionTypes.TOGGLE_DISABLED:
            return {
                ...state,
                disabled: !state.disabled
            }
        case GameActionTypes.TOGGLE_GAME_WON:
            return {
                ...state,
                gameWon: !state.gameWon
            }
        case GameActionTypes.TOGGLE_GAME_WON:
            return {
                ...state,
                turns: 0
            }

        default:
            return state;
    }
}

export default gameReducer;