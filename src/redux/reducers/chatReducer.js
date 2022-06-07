import * as actionTypes from '../actionTypes';

const chatReducer=(state={chats:[],users:[],newMessages:0},action)=>{
switch(action.type){
    case actionTypes.getMessages:
        return{
            ...state,
            chats:action.payload,
            newMessages:action.payload.length-state.chats.length
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