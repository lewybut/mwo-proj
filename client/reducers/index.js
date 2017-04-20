import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { navigation } from './navigation';

const rootReducer = combineReducers({
    navigation,
    routing
});

export default rootReducer;
