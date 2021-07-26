import * as actionTypes from "./coins-types"
import axios from "axios"

export const loadCoins = (coins) => {
    return {
        type: actionTypes.LOAD_COINS,
        payload:coins
    }
}

export const fetchCoinsSuccess = (coins) => {
    return {
        type: actionTypes.FETCH_COINS_SUCCESS,
        payload:coins
    }
}

export const fetchCoinSuccess = (coin) => {
    return {
        type: actionTypes.FETCH_COIN_SUCCESS,
        payload:coin
    }
}

export const fetchCoinInfoSuccess = (coinInfo) => {
    return {
        type: actionTypes.FETCH_COIN_INFO_SUCCESS,
        payload:coinInfo
    }
}


export const fetchCoinHistorySuccess = (coinHistory) => {
    return {
        type: actionTypes.FETCH_COIN_HISTORY_SUCCESS,
        payload:coinHistory
    }
}


export const fetchCoins = () => {
    return (dispatch) =>{
        axios.get('https://api.coingecko.com/api/v3/coins/list')
        .then(response =>{
            const coins = response.data
            let filteredCoins = coins.filter(coin=>coin.id !== "")
            dispatch(fetchCoinsSuccess(filteredCoins))
        })
    }

}

export const fetchCoin = (id) => {
    return (dispatch) =>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(response =>{
            const coin = response.data
            dispatch(fetchCoinSuccess(coin))
        })
    }

}

export const fetchCoinInfo = () => {
    return (dispatch) =>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true')
        .then(response =>{
            const coinInfo = response.data
            dispatch(fetchCoinInfoSuccess(coinInfo))
        })
    }

}

export const fetchCoinHistory = (coinId) =>{
    return (dispatch) =>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=240&interval=daily`)
        .then(response => {
            const coinHistory = response.data
            dispatch(fetchCoinHistorySuccess(coinHistory))
        })
    }
}