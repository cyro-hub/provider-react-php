import * as actionTypes  from '../actionTypes'
import { storage } from '../../firebase';
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import store from '../store'

export const addRecipe=async(recipe)=>{
    console.log(recipe)
    return await fetch(`${process.env.REACT_APP_API}/recipe.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'post'
        },
        body:JSON.stringify(recipe)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getRecipes,
                    payload:data.data
                })
            }else{
                removeIsUploading();
                // removeImage(recipe.imageUrl)
            }
        }).catch(err=>{
            removeIsUploading();
            // removeImage(recipe.imageUrl)
        })
}

export const getRecipes =async()=>{
    return await fetch(`${process.env.REACT_APP_API}/recipe.php`)
        .then(res=>res.json())
        .then(data=>{
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getRecipes,
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

export const isUploading =()=>{
    store.dispatch({
        type:actionTypes.isUploading
    })
}

export const removeIsUploading = ()=>{
    store.dispatch({
        type:actionTypes.removeIsUploading
    })
}

export const removeImage =async(url)=>{
    storage.refFromURL(url).delete();
}