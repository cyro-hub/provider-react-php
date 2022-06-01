import * as actionTypes from '../actionTypes';

const locationReducer =(state={locations:[],success:''},action)=>{
switch (action.type){
    case actionTypes.getLocations:
        return {
            ...state,
            locations:action.payload,
            success:'Successfully added Location'
        };
    case actionTypes.removeSuccess:
        return {
            ...state,
            success:''
        }
    default:
        return {...state};
}
}

export default locationReducer;