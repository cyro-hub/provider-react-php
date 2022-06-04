import * as actionTypes from '../actionTypes'

const cartReducer=(state={cart:[],orders:[]},action)=>{
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
    default:
       return  {...state}
}
}

export default cartReducer;