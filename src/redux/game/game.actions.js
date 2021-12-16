import GameActionTypes from "./constants";

export const setCards = cards => ({
    type: GameActionTypes.SET_CARDS,
    payload: cards
})

export const incrementTurns = () => ({
    type: GameActionTypes.INCREMENT_TURNS
})

export const setFirstCard = card => ({
    type: GameActionTypes.SET_FIRST_CARD,
    payload: card
})

export const setSecondCard = card => ({
    type: GameActionTypes.SET_SECOND_CARD,
    payload: card
})

export const toggleDisabled = () => ({
    type: GameActionTypes.TOGGLE_DISABLED
})

export const setGameWon = () => ({
    type: GameActionTypes.SET_GAME_WON
})

export const resetTurns = () => ({
    type: GameActionTypes.RESET_TURNS
})