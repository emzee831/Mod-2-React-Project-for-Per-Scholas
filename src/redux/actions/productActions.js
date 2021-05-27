import { ActionTypes } from "../contants/action-types";


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const setNews = (news) => {
    return {
        type: ActionTypes.SET_NEWS,
        payload: news,
    };
};

export const setCryptoNews = (cryptonews) => {
    return {
        type: ActionTypes.SET_CRYPTONEWS,
        payload: cryptonews,
    };
};

export const setCryptoSymbols = (cryptosymbols) => {
    return {
        type: ActionTypes.SET_CRYPTOSYMBOLS,
        payload: cryptosymbols,
    };
};


