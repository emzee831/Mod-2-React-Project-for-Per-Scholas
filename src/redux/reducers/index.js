import { combineReducers } from "redux";
import { productReducer, newsReducer, cryptonewsReducer, cryptosymbolsReducer } from "./productReducer";


const reducers = combineReducers({
    allProducts: productReducer,
    allNews: newsReducer,
    allCryptonews: cryptonewsReducer,
    allCryptosymbols: cryptosymbolsReducer,
});

export default reducers