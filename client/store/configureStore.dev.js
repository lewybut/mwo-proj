import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxThunk)
    );

    return store;
}
