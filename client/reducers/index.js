import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { navigation } from './navigation';
import { home } from './home';

const rootReducer = combineReducers({
    navigation,
    home,
    routing
});

export default rootReducer;
