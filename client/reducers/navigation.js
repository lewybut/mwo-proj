import * as types from '../actions/types';

const initialState = {
    currentTab: 'Home',
    links: [
        {
            linkTo: '/',
            linkTitle: 'Home'
        },
        {
            linkTo: '/login',
            linkTitle: 'Login'
        }
    ]
};

export const navigation = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_TAB:
            const { currentTab } = action;
            return {
                ...state,
                currentTab
            };
        default:
            return state;
    }
};

