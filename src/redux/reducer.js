import * as actionTypes from './actionTypes';
const initialState = { cart:[],auth:false };

function reducer(state=initialState,action){
    switch (action.type) {
        case actionTypes.authenticate:
            return {
                ...state,
                auth:true
            };
        case actionTypes.clearUser:
            localStorage.clearItem('token');
            return {
                ...state,
                auth:false
            };
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
            return {...state};
    }
}

export default reducer;