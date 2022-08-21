import { combineReducers } from "redux";
import auth from './auth';

const appReducer = combineReducers({
    auth
})

export default appReducer