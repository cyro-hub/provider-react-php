import {createStore} from 'redux'
import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import locationReducer from './reducers/locationReducer';
import contactReducer from './reducers/contactReducer';
import chatReducer from './reducers/chatReducer';
import recipeReducer from './reducers/recipeReducer';

const combinedReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    location:locationReducer,
    contact:contactReducer,
    chat:chatReducer,
    recipe:recipeReducer
  })

const store = createStore(combinedReducer);

export default store;
