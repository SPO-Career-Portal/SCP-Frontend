import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunkMiddleware from "redux-thunk";
import { sessionService } from "redux-react-session";
const store = createStore(rootReducer ,compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose));;
sessionService.initSessionService(store);
export default store;
