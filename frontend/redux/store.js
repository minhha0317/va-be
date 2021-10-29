import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer } from './reducers/userReducers';
import { userInfo } from '../constants/storageKeys';

const reducers = combineReducers({
	userLogin: userLoginReducer,
});

const initialState = {
	userLogin: {},
};

const middleware = [thunk];

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
