import { combineReducers } from "redux";
import { session } from './session.reducer';

export const reducers = combineReducers({
    session: session,
});