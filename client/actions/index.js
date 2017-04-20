import * as types from './types';

export function setCurrentTab(currentTab) {
    return {
        type: types.SET_CURRENT_TAB,
        currentTab
    };
}
