import { combineReducers } from "redux";
import FetchReducer from  './fetchReducer.js';

const appReducer = combineReducers({
    fetchReducer:FetchReducer
});

export default appReducer;