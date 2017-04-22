import * as types from '../actions/types';

const initialState = {
    focusedInput: '',
    name: '',
    email: '',
    nickname: '',
    password: '',
    invalidateInputs: [],
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
    const {name, email, nickname, focusedInput} = action;
    const {invalidateInputs, inputs} = state;
    let newInvalidateInputs = [];

    switch (action.type) {
        case types.SET_FOCUSED_INPUT:
            return (focusedInput !== undefined) ? {
                ...state,
                focusedInput
            } : state;

        case types.SET_NAME_INPUT_VALUE:
            newInvalidateInputs = invalidateInputs.filter(x => x !== inputs[0].inputLabel);
            if (name.length > 3 && regExpValidation(name)) {
                return {
                    ...state,
                    invalidateInputs: newInvalidateInputs,
                    name
                };
            }
            return {
                ...state,
                invalidateInputs: [...newInvalidateInputs, inputs[0].inputLabel],
                name
            };

        case types.SET_EMAIL_INPUT_VALUE:
            return {
                ...state,
                email
            };

        case types.SET_NICKNAME_INPUT_VALUE:
            newInvalidateInputs = invalidateInputs.filter(x => x !== inputs[2].inputLabel);
            if (nickname.length > 3 && regExpValidation(nickname)) {
                return {
                    ...state,
                    invalidateInputs: newInvalidateInputs,
                    nickname
                };
            }
            return {
                ...state,
                invalidateInputs: [...newInvalidateInputs, inputs[2].inputLabel],
                nickname
            };

        case types.SET_PASSWORD_INPUT_VALUE:
            const {password} = action;
            newInvalidateInputs = invalidateInputs.filter(x => x !== inputs[3].inputLabel);
            if (password.length > 3 && regExpValidation(password)) {
                return {
                    ...state,
                    invalidateInputs: newInvalidateInputs,
                    password
                };
            }
            return {
                ...state,
                invalidateInputs: [...newInvalidateInputs, inputs[3].inputLabel],
                password
            };

        default:
            return state;
    }
};

const regExpValidation = (str) => {
    const pattern = new RegExp('^(^[^0-9])([\w a-z A-Z 0-9][^@#])$');
    return pattern.test(str);
};
