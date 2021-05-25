import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, newsReducer } from "./productReducer";


const reducers = combineReducers({
    allProducts: productReducer,
    allNews: newsReducer,
    product: selectedProductReducer,
});

export default reducers