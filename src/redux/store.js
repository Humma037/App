import { createStore } from "redux";
import { combineReducers } from "redux";
import {userReducer} from './reducers/userReducer'
const reducers = combineReducers({
    userReducer
})

const store = createStore(reducers);

export default store;