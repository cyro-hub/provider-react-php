import {createStore} from 'redux'
import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
const combinedReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
  })

const store = createStore(combinedReducer);

export default store;
