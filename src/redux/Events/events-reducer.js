import * as actionTypes from "./events-types"

const INITIAL_STATE = {
    events: [
    ]
}

const eventsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.LOAD_EVENTS:
            return {}
        case actionTypes.FETCH_EVENTS_SUCCESS:
            return {
                events: action.payload
            }
        default:
            return state
    }
}

export default eventsReducer