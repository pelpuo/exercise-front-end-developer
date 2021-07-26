import * as actionTypes from "./coins-types";

const INITIAL_STATE = {
  coins: [],
  coinInfo: [],
  currentCoin: {},
  currentCoinHistory:{}
};

const coinsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOAD_COINS:
      return {};
    case actionTypes.FETCH_COINS_SUCCESS:
      return {
        coins: action.payload,
        coinInfo: state.coinInfo,
        currentCoin: state.currentCoin,
        currentCoinHistory: state.currentCoinHistory
      };
    case actionTypes.FETCH_COIN_INFO_SUCCESS:
      return {
        coinInfo: action.payload,
        coins: state.coins,
        currentCoin: state.currentCoin,
        currentCoinHistory: state.currentCoinHistory
      };
    case actionTypes.FETCH_COIN_SUCCESS:
      return {
        coinInfo: state.coinInfo,
        coins: state.coins,
        currentCoin: action.payload,
        currentCoinHistory: state.currentCoinHistory
      };
      case actionTypes.FETCH_COIN_HISTORY_SUCCESS:
      return {
        coinInfo: state.coinInfo,
        coins: state.coins,
        currentCoin: state.currentCoin,
        currentCoinHistory: action.payload
      };
    default:
      return state;
  }
};

export default coinsReducer;
