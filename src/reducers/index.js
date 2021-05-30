import changeUserState from './loginReducer';
import { combineReducers } from 'redux';
import { sessionReducer as session } from "redux-react-session";
const rootReducer = combineReducers({
    changeUserState,
    session,
});

export default rootReducer;
