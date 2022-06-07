import * as actionTypes  from '../actionTypes'
import store from '../store'


//CART ACTIONS

export const addToCart=(recipe)=>{
    store.dispatch({
        type:actionTypes.addToCart,payload:recipe
    })
}


// REMOVE FROM CART
export const removeFromCart=async(id,cart)=>{
    var newCart = [];
    for(let i=0;i<cart.length;i++){
        if(i!==id){
            newCart.push(cart[i])
        }
    }
    store.dispatch({
        type:actionTypes.removeFromCart,
        payload:newCart
    })
}

export const addOrder=async(cart,total)=>{
const token = JSON.parse(localStorage.getItem('token'));
    return await fetch(`${process.env.REACT_APP_API}/order.php`, {
        method: 'POST',
        body: JSON.stringify({token:token,order:cart,total:total,post:'add_order'}),
        })
        .then(response => response.json())
        .then(data=>{
            if(data.status===200){
                localStorage.setItem('cart',JSON.stringify(cart));
                localStorage.setItem('previousOrderID',JSON.stringify(data.data));
                store.dispatch({
                    type:actionTypes.addOrder,
                    payload:data.data
                })
            }else{
                store.dispatch({
                    type:actionTypes.unknown
                })
            }
        }).catch(err=>{
            store.dispatch({
                type:actionTypes.unknown
            })
        })
}

export const deleteOrder=async(id)=>{
        return await fetch(`${process.env.REACT_APP_API}/order.php`, {
            method: 'POST',
            body: JSON.stringify({orderID:id,post:'delete_order'}),
            })
            .then(response => response.json())
            .then(data=>{
                if(data.status===200){
                    store.dispatch({
                        type:actionTypes.getOrders,
                        payload:data.data
                    })
                }else{
                    store.dispatch({
                        type:actionTypes.unknown
                    })
                }
            }).catch(err=>{
                store.dispatch({
                    type:actionTypes.unknown
                })
        })
    }

export const getOrders=async()=>{
        return await fetch(`${process.env.REACT_APP_API}/order.php`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getOrders,
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