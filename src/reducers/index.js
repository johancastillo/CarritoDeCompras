import { combineReducers } from 'redux';
import inventarioReducer from './inventarioReducer';
import carritoReducer from './carritoReducer';
export default combineReducers({
    inventarioReducer,
    carritoReducer
});