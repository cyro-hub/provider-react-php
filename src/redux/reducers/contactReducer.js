import * as actionTypes from '../actionTypes';

const contactReducer =(state={contacts:[],success:''},action)=>{
switch (action.type){
    case actionTypes.getContacts:
        return {
            ...state,
            contacts:action.payload,
            success:'Thanks for your feedback'
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

export default contactReducer;