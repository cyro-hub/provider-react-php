import * as actionTypes from '../actionTypes'

const cartReducer=(state={cart:[],orders:[]},action)=>{
switch(action.type){
    case actionTypes.addToCart:
        return {
            ...state,
            cart:[...state.cart,action.payload]
        }
    case actionTypes.removeFromCart:
        const newCart = state.cart.filter(recipe=>recipe.id!==action.payload);
        return {
            ...state,
            cart:newCart
        }
    default:
       return  {...state}
}
}

export default cartReducer;