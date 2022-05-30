import * as actionTypes  from './actionTypes'
import store from './store'


// USER ACTIONS
export const authenticateUser = ()=>{
    store.dispatch({
        type:actionTypes.authenticate
    })
}

export const clearUser = ()=>{
    store.dispatch({
        type:actionTypes.clearUser
    })
}

//CART ACTIONS

export const addToCart=(recipe)=>{
    store.dispatch({
        type:actionTypes.addToCart,payload:recipe
    })
}

export const removeFromCart=(id)=>{
    store.dispatch({
        type:actionTypes.removeFromCart,
        payload:id
    })
}