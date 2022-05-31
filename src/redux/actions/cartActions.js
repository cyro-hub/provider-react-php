import * as actionTypes  from '../actionTypes'
import store from '../store'


//CART ACTIONS

export const addToCart=(recipe)=>{
    store.dispatch({
        type:actionTypes.addToCart,payload:recipe
    })
}

export const removeFromCart=async(id)=>{
    // perform a fetch to remove the item in cart
    store.dispatch({
        type:actionTypes.removeFromCart,
        payload:id
    })
}

export const removeFromOrders=async(id)=>{
    // perform a fetch to remove the order from the db
    store.dispatch({
        type:actionTypes.removeFromOrders,
        payload:id
    })
}