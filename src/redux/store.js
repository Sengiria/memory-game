import rootReducer from "./root-reducer";
const { createStore, applyMiddleware } = require("redux");
const { logger } = require("redux-logger");

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;