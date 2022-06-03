import * as actionTypes  from '../actionTypes'
import store from '../store'


/// this is for the  users in the app
export const sendMessage=async(message)=>{
    return await fetch(`${process.env.REACT_APP_API}/chat.php`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'user'
        },
        body: JSON.stringify(message),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getMessages,
                    payload:data.data
                })
            }else{
                store.dispatch({
                    type:actionTypes.unknown,
                    payload:[]
            })
            }
        }).catch(err=>{
            console.log(err)
            store.dispatch({
                type:actionTypes.unknown,
                payload:[]
            })
        })
}

/// this is for the admin
export const getUsers=async()=>{
    return await fetch(`${process.env.REACT_APP_API}/chat.php`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':''
        },
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getUsers,
                    payload:data.data
                })
            }else{
                store.dispatch({
                    type:actionTypes.unknown,
                    payload:[]
            })
            }
        }).catch(err=>{
            store.dispatch({
                type:actionTypes.unknown,
                payload:[]
            })
        })
}

/// this is for the admin to get the users message
export const getChatsByEmail = async(email)=>{
    return await fetch(`${process.env.REACT_APP_API}/chat.php`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'messages'
        },
        body:JSON.stringify({email:email}),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getMessages,
                    payload:data.data
                })
            }else{
                store.dispatch({
                    type:actionTypes.unknown,
                    payload:[]
            })
            }
        }).catch(err=>{
            store.dispatch({
                type:actionTypes.unknown,
                payload:[]
            })
        })
}

///this is the messages for the user in the app
export const getMessageByName=async(credential)=>{
    return await fetch(`${process.env.REACT_APP_API}/chat.php`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'userMessage'
        },
        body:JSON.stringify({credential:credential})
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            store.dispatch({
                type:actionTypes.getMessages,
                payload:data.data
            })
        }).catch(err=>{
            store.dispatch({
                type:actionTypes.unknown,
                payload:[]
            })
        })
}

/// post admin message
export const sendMessageByAdmin=async(message)=>{
    return await fetch(`${process.env.REACT_APP_API}/chat.php`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'admin'
        },
        body: JSON.stringify(message),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getMessages,
                    payload:data.data
                })
            }else{
                store.dispatch({
                    type:actionTypes.unknown,
                    payload:[]
            })
            }
        }).catch(err=>{
            console.log(err)
            store.dispatch({
                type:actionTypes.unknown,
                payload:[]
            })
        })
}