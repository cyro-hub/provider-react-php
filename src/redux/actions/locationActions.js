import * as actionTypes  from '../actionTypes'
import store from '../store'

//LOCATION ACTIONS
export const addLocation = async(location)=>{
    return await fetch(`${process.env.REACT_APP_API}/location.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'location'
        },
        body: JSON.stringify(location),
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
                    type:actionTypes.unknown
                })
            }
        }).catch(err=>[
            store.dispatch({
                type:actionTypes.unknown
            })
        ])
}

export const removeSuccess =()=>{
    store.dispatch({type:actionTypes.removeSuccess});
}

export const removeFromLocation=async(id)=>{
    return await fetch(`${process.env.REACT_APP_API}/location.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':' '
        },
        body: JSON.stringify({locationID:id}),
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

export const getRegions=(locations)=>{
    var newLocations = locations.sort((a, b) => (a.region > b.region) ? 1 : -1)
    var tmp='';
    var len = newLocations.length;
    var regions = [];
    for(let i=0;i<len;i++){
        if(tmp!==newLocations[i].region){
            regions.push(newLocations[i]);
            tmp=newLocations[i].region;
        }
    }
    store.dispatch({
        type:actionTypes.getRegions,
        payload:regions
    })
}            
          