import * as actionTypes from '../actionTypes';

const locationReducer =(state={locations:[],success:'',regions:[]},action)=>{
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
    case actionTypes.getRegions:
    return {
        ...state,
        regions:action.payload
    }
    default:
        return {...state};
}
}

export default locationReducer;