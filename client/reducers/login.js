import * as types from '../actions/types';

const initialState = {
    userNickname: '',
    userLoggedIn: false,
    loginSignUpAttempt: false,
    loginSignUpSuccess: false,
    loginSignUpFail: false
};

export const login = (state = initialState, action) => {
    let { userNickname } = action;

    switch (action.type) {

        case types.LOGIN_ATTEMPT:
            return {
                ...state,
                loginSignUpAttempt: true
            };

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                userNickname,
                userLoggedIn: true,
                loginSignUpAttempt: false,
                loginSignUpSuccess: true,
                loginSignUpFail: false
            };

        case types.LOGIN_FAIL:
            return {
                ...state,
                loginSignUpAttempt: false,
                loginSignUpFail: true
            };

        case types.SIGN_UP_ATTEMPT:
            return {
                ...state,
                loginSignUpAttempt: true
            };

        case types.SIGN_UP_SUCCESS:
            return {
                ...state,
                userNickname,
                userLoggedIn: true,
                loginSignUpAttempt: false,
                loginSignUpSuccess: true,
                loginSignUpFail: false
            };

        case types.SIGN_UP_FAIL:
            return {
                ...state,
                loginSignUpAttempt: false,
                loginSignUpFail: true
            };

        default:
            return state;
    }
};

