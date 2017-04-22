import * as types from '../actions/types';

const initialState = {
    focusedInput: '',
    name: '',
    email: '',
    nickname: '',
    password: '',
    invalidateInputs: new Set(),
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
    let {name, email, nickname, password, focusedInput} = action;
    let {invalidateInputs, inputs} = state;
    let newInvalidateInputs = [];

    switch (action.type) {
        case types.SET_FOCUSED_INPUT:
            return (focusedInput !== undefined) ? {
                ...state,
                focusedInput
            } : state;

        case types.SET_NAME_INPUT_VALUE:
            if (name.length > 3 && regExpValidation(name)) {
                newInvalidateInputs = [...invalidateInputs].filter(x => x !== inputs[0].inputLabel);
                return {
                    ...state,
                    invalidateInputs: new Set(...newInvalidateInputs),
                    name
                };
            }
            return {
                ...state,
                invalidateInputs: new Set([...invalidateInputs, inputs[0].inputLabel]),
                name
            };

        case types.SET_EMAIL_INPUT_VALUE:
            return {
                ...state,
                email
            };

        case types.SET_NICKNAME_INPUT_VALUE:
            if (nickname.length > 3 && regExpValidation(nickname)) {
                newInvalidateInputs = [...invalidateInputs].filter(x => x !== inputs[2].inputLabel);
                return {
                    ...state,
                    invalidateInputs: new Set(...newInvalidateInputs),
                    nickname
                };
            }
            return {
                ...state,
                invalidateInputs: new Set([...invalidateInputs, inputs[2].inputLabel]),
                nickname
            };

        case types.SET_PASSWORD_INPUT_VALUE:
            if (password.length > 6 && regExpValidation(password)) {
                newInvalidateInputs = [...invalidateInputs].filter(x => x !== inputs[3].inputLabel);
                return {
                    ...state,
                    invalidateInputs: new Set(...newInvalidateInputs),
                    password
                };
            }
            return {
                ...state,
                invalidateInputs: new Set([...invalidateInputs, inputs[3].inputLabel]),
                password
            };

        default:
            return state;
    }
};

const regExpValidation = (str) => {
    const pattern = new RegExp('^[a-zA-Z0-9\d\\-\\_.,\s]+$');
    return pattern.test(str);
};
