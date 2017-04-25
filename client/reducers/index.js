import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { navigation } from './navigation';
import { home } from './home';
import { form } from './form';
import { login } from './login';

const rootReducer = combineReducers({
    navigation,
    login,
    home,
    form,
    routing
});

export default rootReducer;
