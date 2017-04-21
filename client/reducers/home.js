import * as types from '../actions/types';

const initialState = {
    isHovered: false
};

export const home = (state = initialState, action) => {
    switch (action.type) {

        case types.SET_HOVER_WIDTH:
            const { isHovered } = action;
            return {
                ...state,
                isHovered
            };

        default:
            return state;
    }
};

