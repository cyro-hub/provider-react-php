import * as actionTypes  from '../actionTypes'
import store from '../store'


//CART ACTIONS

export const addToCart=(recipe)=>{
    store.dispatch({
        type:actionTypes.addToCart,payload:recipe
    })
}

export const removeFromCart=async(id,cart)=>{
    var newCart = [];
    for(let i=0;i<cart.length;i++){
        if(i!==id){
            newCart.push(cart[i])
        }
    }
    store.dispatch({
        type:actionTypes.removeFromCart,
        payload:newCart
    })
}

export const removeFromOrders=async(id)=>{
    // perform a fetch to remove the order from the db
    store.dispatch({
        type:actionTypes.removeFromOrders,
        payload:id
    })
}