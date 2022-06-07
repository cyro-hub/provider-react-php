import * as actionTypes from '../actionTypes'

const initialState = {
    maxOrderByName:[],
    minOrderByName:[]
}

const analysisReducer=(state=initialState,action)=>{
switch(action.type){   
    case actionTypes.getAnalysis:
        return {
            ...state,
            maxOrderByName:action.payload.max,
            minOrderByName:action.payload.min,
        }
    default:
       return  {...state}
}
}

export default analysisReducer;