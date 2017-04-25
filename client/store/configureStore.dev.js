import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            reduxLogger,
            reduxThunk
        )
    );

    return store;
}
