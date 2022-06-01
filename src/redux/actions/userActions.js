import * as actionTypes  from '../actionTypes'
import store from '../store'


// USER ACTIONS


// authenticate from web entring
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
            store.dispatch({
                type:actionTypes.unknown
            })
          })
}

// authenticate from login 
export const loginAuth=()=>{
    store.dispatch({type:actionTypes.authenticate})
}

export const removeFromUsers = async(id)=>{
    return await fetch(`${process.env.REACT_APP_API}/user.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':''
        },
        body: JSON.stringify({userID:id}),
        })
        .then(response => response.json())
        .then(data=>{
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
        }).catch(err=>[
            store.dispatch({
                type:actionTypes.unknown
            })
        ])
    }

export const getUsers = async()=>{
    fetch(`${process.env.REACT_APP_API}/user.php`).then(res=>res.json()).then(data=>{
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
    }).catch(err=>[
        store.dispatch({
            type:actionTypes.viewUsers,
            payload:[]
        })
    ])
}

export const login = async(user)=>{
    return await fetch(`${process.env.REACT_APP_API}/user.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'login'
        },
        body: JSON.stringify(user),
        })
        .then(response => response.json())
}

export const register = async(user)=>{
    return await fetch(`${process.env.REACT_APP_API}/user.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'register'
        },
        body: JSON.stringify(user),
        })
        .then(response => response.json())
}