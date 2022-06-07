import * as actionTypes from '../actionTypes'

const recipeReducer=(state={recipes:[],uploadingRecipe:false,isRecipeEdit:false,popular:[]},action)=>{
switch(action.type){   
    case actionTypes.getRecipes:
        return {
            ...state,
            recipes:action.payload,
            uploadingRecipe:false,
            isRecipeEdit:false
        }
    case actionTypes.isUploading:
        return {
            ...state,
            uploadingRecipe:true
        }
    case actionTypes.removeIsUploading:
        return {
            ...state,
            uploadingRecipe:false,
            isRecipeEdit:false
        }
    case actionTypes.getRecipesByStatus:
        return{
            ...state,
            popular:action.payload
        }
    case actionTypes.setEditRecipe:
        return{
            ...state,
            isRecipeEdit:true,
            toBeEdited:action.payload
        }
    default:
       return  {...state}
}
}

export default recipeReducer;