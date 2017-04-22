import * as types from './types';

export const setCurrentTab = (currentTab) => ({
    type: types.SET_CURRENT_TAB,
    currentTab
});

export const setHoverWidth = (isHovered) => ({
    type: types.SET_HOVER_WIDTH,
    isHovered
});

export const setFocusedInput = (focusedInput) => ({
    type: types.SET_FOCUSED_INPUT,
    focusedInput
});

export const setNameInputValue = (name) => ({
    type: types.SET_NAME_INPUT_VALUE,
    name
});

export const setEmailInputValue = (email) => ({
    type: types.SET_EMAIL_INPUT_VALUE,
    email
});

export const setNicknameInputValue = (nickname) => ({
    type: types.SET_NICKNAME_INPUT_VALUE,
    nickname
});

export const setPasswordInputValue = (password) => ({
    type: types.SET_PASSWORD_INPUT_VALUE,
    password
});
