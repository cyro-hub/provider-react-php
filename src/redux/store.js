import {createStore} from 'redux'
import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import locationReducer from './reducers/locationReducer';
import contactReducer from './reducers/contactReducer';
import chatReducer from './reducers/chatReducer';

const combinedReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    location:locationReducer,
    contact:contactReducer,
    chat:chatReducer
  })

const store = createStore(combinedReducer);

export default store;
