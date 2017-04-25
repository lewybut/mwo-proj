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
    let {name, email, nickname, password, focusedInput, inputLabelToValidate, currentInputValue} = action;
    let {invalidateInputs, inputs} = state;
    let newInvalidateInputs;
    let currentInput;
    let setToInvalidateInputs;
    let newInputMessage;
    let indexOfCurrentInput;

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
            return {
                ...state,
                name
            };

        case types.SET_EMAIL_INPUT_VALUE:
            return {
                ...state,
                email
            };

        case types.SET_NICKNAME_INPUT_VALUE:
            return {
                ...state,
                nickname
            };

        case types.SET_PASSWORD_INPUT_VALUE:
            return {
                ...state,
                password
            };

        case types.VALIDATE_INPUT:
            indexOfCurrentInput = inputs.findIndex((input) => input.inputLabel === inputLabelToValidate);
            currentInput = inputs[indexOfCurrentInput];
            newInputMessage = '';
            setToInvalidateInputs = [...invalidateInputs, currentInput.inputLabel];
            newInvalidateInputs = [...invalidateInputs].filter(x => x !== currentInput.inputLabel);

            if (isEmail(inputLabelToValidate) && regExpEmailValidation(currentInputValue)) {
                setToInvalidateInputs = newInvalidateInputs;
                newInputMessage = '';
            } else if (isEmail(inputLabelToValidate) && !regExpEmailValidation(currentInputValue)) {
                newInputMessage = 'Check your email address!';
            } else if (isPassword(inputLabelToValidate) && currentInputValue.length < 6) {
                newInputMessage = 'At least 6 chars!';
            } else if (isNameOrNickname(inputLabelToValidate) && currentInputValue.length < 4) {
                newInputMessage = 'At least 4 chars!';
            } else if (!isPassword(inputLabelToValidate)
                        && !isEmail(inputLabelToValidate)
                        && regExpValidation(currentInputValue)
            ) {
                newInputMessage = 'Do not use special chars!';
            } else {
                setToInvalidateInputs = newInvalidateInputs;
                newInputMessage = '';
            }
            inputs[indexOfCurrentInput] = {
                ...currentInput,
                inputMessage: newInputMessage
            };

            return {
                ...state,
                inputs,
                invalidateInputs: new Set(setToInvalidateInputs)
            };

        default:
            return state;
    }
};

const regExpValidation = (str) => {
    // let pattern = new RegExp('^[a-zA-Z0-9\d\\-\\_\s]+$');
    return !/^[a-zA-Z0-9\d\\-\\_\s]+$/.test(str);
};

const regExpEmailValidation = (email) => {
    return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
};

const isPassword = (label) => {
    return label === 'Password';
};

const isEmail = (label) => {
    return label === 'Email';
};

const isNameOrNickname = (label) => {
    return label === 'Name' || label === 'Nickname';
};
