import * as actionTypes from '../actionTypes';

const chatReducer=(state={chats:[],users:[]},action)=>{
switch(action.type){
    case actionTypes.getMessages:
        return{
            ...state,
            chats:action.payload
        }
    case actionTypes.getUsers:
        return{
            ...state,
            users:action.payload
        }
    default:
        return{...state}       
}
}

export default chatReducer;