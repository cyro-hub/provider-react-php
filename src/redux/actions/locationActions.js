import * as actionTypes  from '../actionTypes'
import store from '../store'

//LOCATION ACTIONS
export const addLocation = async(location)=>{
    return await fetch(`${process.env.REACT_APP_API}/location.php`, {
        method: 'POST',
        body: JSON.stringify({location,post:"add_location"}),
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.addLocation,
                    payload:data.data
                })
            }else{
                store.dispatch({
                    type:actionTypes.unknown
                })
            }
        }).catch(err=>{
            console.log(err.message)
            store.dispatch({
                type:actionTypes.unknown
            })
})
}

export const removeSuccess =()=>{
    store.dispatch({type:actionTypes.removeSuccess});
}

export const removeFromLocation=async(id)=>{
    return await fetch(`${process.env.REACT_APP_API}/location.php`, {
        method: 'POST',
        body: JSON.stringify({locationID:id,post:'remove_location'}),
        })
        .then(response => response.json())
        .then(data=>{
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getLocations,
                    payload:data.data
                })
            }else{
                store.dispatch({
                    type:actionTypes.getLocations,
                    payload:[]
                })
            }
        }).catch(err=>[
            store.dispatch({
                type:actionTypes.unknown
            })
        ])
}

export const getLocations=async()=>{
    return await fetch(`${process.env.REACT_APP_API}/location.php`)
        .then(res=>res.json())
        .then(data=>{
            store.dispatch({
                type:actionTypes.getLocations,
                payload:data.data
            })
        }).catch(err=>{
                    store.dispatch({
                        type:actionTypes.unknown,
                        payload:[]
                    })
                })
            }

export const getRegions=async(locations)=>{
    return await fetch(`${process.env.REACT_APP_API}/location.php`, {
        method: 'POST',
        body:JSON.stringify({post:'get_regions'})})
        .then(response => response.json())
        .then(data=>{
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getRegions,
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

export const getTowns =async(region)=>{
    return await fetch(`${process.env.REACT_APP_API}/location.php`, {
        method: 'POST',
        body: JSON.stringify({region:region,post:'get_towns'}),})
        .then(response => response.json())
        .then(data=>{
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getTowns,
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
          