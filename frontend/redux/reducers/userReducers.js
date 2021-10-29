import {
	USER_GET_FROM_STORAGE,
	USER_LOGIN_FAILED,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
} from '../actionTypes';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_GET_FROM_STORAGE:
			return action.payload ? { userInfo: { ...action.payload } } : state;
		case USER_LOGIN_REQUEST:
			return { loading: true };
		case USER_LOGIN_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_LOGIN_FAILED:
			return { loading: false, error: action.payload };
		case USER_LOGOUT:
			return { loading: false };
		default:
			return state;
	}
};
