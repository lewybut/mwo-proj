import * as types from '../actions/types';

const initialState = {
    focusedInput: '',
    name: '',
    email: '',
    nickname: '',
    password: '',
    inputs: [
        {
            inputType: 'text',
            inputLabel: 'Name'
        },
        {
            inputType: 'email',
            inputLabel: 'Email'
        },
        {
            inputType: 'text',
            inputLabel: 'Nickname'
        },
        {
            inputType: 'password',
            inputLabel: 'Password'
        },
    ]
};

export const form = (state = initialState, action) => {
    switch (action.type) {

        case types.SET_FOCUSED_INPUT:
            const {focusedInput} = action;
            return (focusedInput !== undefined) ? {
                ...state,
                focusedInput
            } : state;

        case types.SET_NAME_INPUT_VALUE:
            const {name} = action;
            return {
                ...state,
                name
            };

        case types.SET_EMAIL_INPUT_VALUE:
            const {email} = action;
            return {
                ...state,
                email
            };

        case types.SET_NICKNAME_INPUT_VALUE:
            const {nickname} = action;
            return {
                ...state,
                nickname
            };

        case types.SET_PASSWORD_INPUT_VALUE:
            const {password} = action;
            return {
                ...state,
                password
            };

        default:
            return state;
    }
};

