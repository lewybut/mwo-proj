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
            inputLabel: 'Name',
            inputMessage: ''
        },
        {
            inputType: 'email',
            inputLabel: 'Email',
            inputMessage: ''
        },
        {
            inputType: 'text',
            inputLabel: 'Nickname',
            inputMessage: ''
        },
        {
            inputType: 'password',
            inputLabel: 'Password',
            inputMessage: ''
        },
    ]
};

export const form = (state = initialState, action) => {
    let {name, email, nickname, password, focusedInput} = action;
    let {invalidateInputs, inputs} = state;
    let newInvalidateInputs;
    let currentInput;
    let setToInvalidateInputs;
    let newInputMessage;

    switch (action.type) {
        case types.SET_FOCUSED_INPUT:
            return (focusedInput !== undefined) ? {
                ...state,
                focusedInput
            } : state;

        case types.CLEAN_FOCUSED_INPUT:
            return {
                ...state,
                focusedInput: ''
            };

        case types.SET_NAME_INPUT_VALUE:
            currentInput = inputs[0];
            setToInvalidateInputs = [];
            newInputMessage = '';
            newInvalidateInputs = [...invalidateInputs].filter(x => x !== currentInput.inputLabel);

            if (name.length < 4) {
                setToInvalidateInputs = [...invalidateInputs, currentInput.inputLabel];
                newInputMessage = 'At least 4 chars!';
            } else if (regExpValidation(name)) {
                setToInvalidateInputs = [...invalidateInputs, currentInput.inputLabel];
                newInputMessage = 'Do not use special chars!';
            } else {
                setToInvalidateInputs = newInvalidateInputs;
                newInputMessage = '';
            }
            inputs[0] = {
                ...currentInput,
                inputMessage: newInputMessage
            };

            return {
                ...state,
                name,
                inputs,
                invalidateInputs: new Set(setToInvalidateInputs)
            };

        case types.SET_EMAIL_INPUT_VALUE:
            return {
                ...state,
                email
            };

        case types.SET_NICKNAME_INPUT_VALUE:
            currentInput = inputs[2];
            setToInvalidateInputs = [];
            newInputMessage = '';
            newInvalidateInputs = [...invalidateInputs].filter(x => x !== currentInput.inputLabel);

            if (nickname.length < 4) {
                setToInvalidateInputs = [...invalidateInputs, currentInput.inputLabel];
                newInputMessage = 'At least 4 chars!';
            } else if (regExpValidation(nickname)) {
                setToInvalidateInputs = [...invalidateInputs, currentInput.inputLabel];
                newInputMessage = 'Do not use special chars!';
            } else {
                setToInvalidateInputs = newInvalidateInputs;
                newInputMessage = '';
            }
            inputs[2] = {
                ...currentInput,
                inputMessage: newInputMessage
            };

            return {
                ...state,
                nickname,
                inputs,
                invalidateInputs: new Set(setToInvalidateInputs)
            };

        case types.SET_PASSWORD_INPUT_VALUE:
            currentInput = inputs[3];
            setToInvalidateInputs = [];
            newInputMessage = '';
            newInvalidateInputs = [...invalidateInputs].filter(x => x !== currentInput.inputLabel);

            if (password.length < 6) {
                setToInvalidateInputs = [...invalidateInputs, currentInput.inputLabel];
                newInputMessage = 'At least 6 chars!';
            } else {
                setToInvalidateInputs = newInvalidateInputs;
                newInputMessage = '';
            }
            inputs[3] = {
                ...currentInput,
                inputMessage: newInputMessage
            };

            return {
                ...state,
                password,
                inputs,
                invalidateInputs: new Set(setToInvalidateInputs)
            };

        default:
            return state;
    }
};

const regExpValidation = (str) => {
    const pattern = new RegExp('^[a-zA-Z0-9\d\\-\\_.,\s]+$');
    return !pattern.test(str);
};
