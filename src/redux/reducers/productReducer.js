// import { getStocksSuccess } from "../actions/productActions";
import { ActionTypes } from "../contants/action-types";


const initialState = {
    products:[],
};
const initialState2 = {
    news:[],
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

export const selectedProductReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

