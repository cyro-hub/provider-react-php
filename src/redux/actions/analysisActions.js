import * as actionTypes  from '../actionTypes'
import store from '../store'

export const getAnalysis=async()=>{
    return await fetch(`${process.env.REACT_APP_API}/analysis.php`)
    .then(res=>res.json())
    .then(data=>{
        store.dispatch({
            type:actionTypes.getAnalysis,
            payload:data
        })
    })
}