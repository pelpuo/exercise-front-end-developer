import * as actionTypes from "./events-types"
import axios from "axios"

export const loadEvents = (events) => {
    return {
        type: actionTypes.LOAD_EVENTS,
        payload:events
    }
}

export const fetchEventsSuccess = (events) => {
    return {
        type: actionTypes.FETCH_EVENTS_SUCCESS,
        payload:events
    }
}

export const fetchEvents = () =>{
    return (dispatch) =>{
        axios.get('https://api.coingecko.com/api/v3/events')
        .then(response =>{
            const events = response.data.data
            dispatch(fetchEventsSuccess(events))
        })
    }
}