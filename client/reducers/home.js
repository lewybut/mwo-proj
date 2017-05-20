import * as types from '../actions/types';

const initialState = {
    counter: 0
};

export const home = (state = initialState, action) => {
    switch (action.type) {

        case types.TEST_ACTION:
            const { counter } = action;
            return {
                ...state,
                counter
            };

        default:
            return state;
    }
};

