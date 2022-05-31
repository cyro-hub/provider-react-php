import * as actionTypes  from '../actionTypes'
import store from '../store'


// USER ACTIONS

export const authenticateUser = async()=>{
    return await fetch(`${process.env.REACT_APP_API}/jwtVerify.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':JSON.parse(localStorage.getItem('token'))||''
        }
        }).then(response => response.json()).then(data=>{
            if(data.message){
                //dispatching actions
              store.dispatch({type:actionTypes.authenticate})
            }
          }).catch(err=>{
              //dispatching actions
            store.dispatch({type:actionTypes.clearUser})
          })
}

export const removeFromUsers = async(id)=>{
    //perform some fetch operartion to remove user
    store.dispatch({
        type:actionTypes.removeFromUsers,
        payload:id
    })
}

export const getUsers = async()=>{
    fetch(`${process.env.REACT_APP_API}/login.php`).then(res=>res.json()).then(data=>{
        if(data.status===200){
            store.dispatch({
                type:actionTypes.viewUsers,
                payload:data.data
            })
        }else{
            store.dispatch({
                type:actionTypes.viewUsers,
                payload:[]
            })
        }
    })
}

export const login = async(user)=>{
    return await fetch(`${process.env.REACT_APP_API}/login.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        })
        .then(response => response.json())
}

export const register = async(user)=>{
    return await fetch(`${process.env.REACT_APP_API}/register.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        })
        .then(response => response.json())
}