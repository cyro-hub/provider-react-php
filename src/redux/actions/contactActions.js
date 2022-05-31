import * as actionTypes  from '../actionTypes'
import store from '../store'

// CONTACT MESSAGES ACTIONS

export const removeFromContactMessage=async(id)=>{
    //perform a fetch to remove the contact the call thee dispatch method to update the ui
    store.dispatch({
        type:actionTypes.removeFromContactMessage,
        payload:id
    })
}