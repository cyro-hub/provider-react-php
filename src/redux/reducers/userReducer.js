import * as actionTypes from '../actionTypes'

const userReducer=(state={users:[],auth:false},action)=>{
    switch (action.type) {
        case actionTypes.viewUsers:
            return {
                ...state,
                users:action.payload
            }
        case actionTypes.authenticate:
            return {
                ...state,
                auth:true
            };
        case actionTypes.clearUser:
            localStorage.setItem('token','');
            return {
                ...state,
                auth:false
            };
        
        default:
            return {...state};
    }
}

export default userReducer;