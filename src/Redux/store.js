import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import {reducer as AppReducer} from '../Redux/AppReducer/reducer.js'
import {reducer as AuthReducer} from '../Redux/AuthReducer/reducer.js'

const rootReducer = combineReducers({AppReducer, AuthReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
