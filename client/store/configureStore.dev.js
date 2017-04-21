import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxLogger)
    );

    return store;
}
