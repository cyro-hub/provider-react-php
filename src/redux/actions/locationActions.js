import * as actionTypes  from '../actionTypes'
import store from '../store'

//LOCATION ACTIONS

export const removeFromLocation=async(id)=>{
    //perform a fetch  to remove the location from the db
    store.dispatch({
        type:actionTypes.removeFromLocation,
        payload:id
    })
}