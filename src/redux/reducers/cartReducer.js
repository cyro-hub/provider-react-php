import * as actionTypes from '../actionTypes'

const initialState = {
    cart:JSON.parse(localStorage.getItem('cart'))||[],
    orders:[],
    previousOrder:localStorage.getItem('previousOrderID')||''
}

const cartReducer=(state=initialState,action)=>{
switch(action.type){   
    case actionTypes.addToCart:
        return {
            ...state,
            cart:[...state.cart,action.payload]
        }
    case actionTypes.removeFromCart:
        return {
            ...state,
            cart:action.payload
        }
    case actionTypes.addOrder:
        return{
            ...state,
            previousOrder:action.payload,
            cart:[]
        }
    case actionTypes.getOrders:
        return{
            ...state,
            orders:action.payload
        }
    default:
       return  {...state}
}
}

export default cartReducer;