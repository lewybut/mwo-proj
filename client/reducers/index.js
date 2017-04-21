import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { navigation } from './navigation';
import { home } from './home';
import { form } from './form';

const rootReducer = combineReducers({
    navigation,
    home,
    form,
    routing
});

export default rootReducer;
