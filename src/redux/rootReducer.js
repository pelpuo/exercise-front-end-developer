import { combineReducers } from "redux";

import coinsReducer from "./Coins/coins-reducer"
import eventsReducer from "./Events/events-reducer"

const rootReducer = combineReducers({
    coin: coinsReducer,
    event: eventsReducer
});

export default rootReducer;