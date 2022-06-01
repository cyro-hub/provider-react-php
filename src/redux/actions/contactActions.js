import * as actionTypes  from '../actionTypes'
import store from '../store'

// CONTACT MESSAGES ACTIONS

export const removeFromContactMessage=async(id)=>{
    return await fetch(`${process.env.REACT_APP_API}/contact.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':' '
        },
        body: JSON.stringify({contactID:id}),
        })
        .then(response => response.json())
        .then(data=>{
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getContacts,
                    payload:data.data
                })
            }else{
                store.dispatch({
                    type:actionTypes.unknown
                })
            }
        }).catch(err=>[
            store.dispatch({
                type:actionTypes.unknown
            })
        ])
    // store.dispatch({
    //     type:actionTypes.removeFromContactMessage,
    //     payload:id
    // })
}

export const removeSuccess =()=>{
    store.dispatch({type:actionTypes.removeSuccess});
}

export const addContact=async(contact)=>{
    return await fetch(`${process.env.REACT_APP_API}/contact.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'contact'
        },
        body: JSON.stringify(contact),
        })
        .then(response => response.json())
        .then(data=>{
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getContacts,
                    payload:[]
                })
            }else{
                store.dispatch({
                    type:actionTypes.unknown
                })
            }
        }).catch(err=>[
            store.dispatch({
                type:actionTypes.unknown
            })
        ])
}

export const getContacts=async()=>{
    return await fetch(`${process.env.REACT_APP_API}/contact.php`)
    .then(res=>res.json())
    .then(data=>{
        if(data.status===200){
            store.dispatch({
                type:actionTypes.getContacts,
                payload:data.data
            })
        }else{
            store.dispatch({
                type:actionTypes.unknown
            })
        }
    }).catch(err=>{
                store.dispatch({
                    type:actionTypes.unknown,
                    payload:[]
                })
            })
}