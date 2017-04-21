import * as types from './types';

export const setCurrentTab = (currentTab) => ({
    type: types.SET_CURRENT_TAB,
    currentTab
});

export const setHoverWidth = (isHovered) => ({
    type: types.SET_HOVER_WIDTH,
    isHovered
});
