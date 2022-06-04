import * as actionTypes from '../actionTypes'

const recipeReducer=(state={recipes:[],uploadingRecipe:false},action)=>{
switch(action.type){   
    case actionTypes.getRecipes:
        return {
            ...state,
            recipes:action.payload,
            uploadingRecipe:false
        }
    case actionTypes.isUploading:
        return {
            ...state,
            uploadingRecipe:true
        }
    case actionTypes.removeIsUploading:
        return {
            ...state,
            uploadingRecipe:false
        }
    default:
       return  {...state}
}
}

export default recipeReducer;