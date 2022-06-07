import * as actionTypes from '../actionTypes';

const locationReducer =(state={locations:[],success:'',regions:[],towns:[]},action)=>{
switch (action.type){
    case actionTypes.getLocations:
        return {
            ...state,
            locations:action.payload,
        };
    case actionTypes.addLocation:
        return{
            ...state,
            success:'Location added successfully',
            locations:action.payload,
        }
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
    case actionTypes.getTowns:
        return{
            ...state,
            towns:action.payload
        }
    default:
        return {...state};
}
}

export default locationReducer;