// import { getStocksSuccess } from "../actions/productActions";
import { ActionTypes } from "../contants/action-types";


const initialState = {
    products:[],
};
const initialState2 = {
    news:[],
};

const initialState3 = {
    cryptonews:[],
};

const initialState4 = {
    cryptosymbols:[],
};




export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload };
        default:
        return state;
    }
};

export const newsReducer = (state = initialState2, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_NEWS:
            return {...state, news:payload };
        default:
        return state;
    }
};

export const cryptonewsReducer = (state = initialState3, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CRYPTONEWS:
            return {...state, cryptonews:payload };
        default:
        return state;
    }
};

export const cryptosymbolsReducer = (state = initialState4, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CRYPTOSYMBOL:
            return {...state, cryptosymbols:payload };
        default:
        return state;
    }
};

