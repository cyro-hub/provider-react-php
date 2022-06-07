import * as actionTypes  from '../actionTypes'
import { storage } from '../../firebase';
import { ref, deleteObject } from "firebase/storage";
import store from '../store'

export const addRecipe=async(recipe)=>{
    return await fetch(`${process.env.REACT_APP_API}/recipe.php`, {
        method: 'POST',
        body:JSON.stringify({recipe,post:'add_recipe'})
        })
        .then(response => response.json())
        .then(data => {
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getRecipes,
                    payload:data.data
                })
            }else{
                removeIsUploading();
                removeImage(recipe.imageName)
            }
        }).catch(err=>{
            removeIsUploading();
            removeImage(recipe.imageName)
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


///getting recipes by status for popularity
export const getRecipesByStatus =async()=>{
    return await fetch(`${process.env.REACT_APP_API}/recipe.php`, {
        method: 'POST',
        body:JSON.stringify({post:''})})
        .then(response => response.json())
        .then(data => {
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getRecipesByStatus,
                    payload:data.data
                })
            }else{
                removeIsUploading();
            }
        }).catch(err=>{
            removeIsUploading();
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


//removing images by image name
export const removeImage =async(image)=>{ 

const imageRef = ref(storage, image);

deleteObject(imageRef).then(() => {
    removeIsUploading();
  }).catch((error) => {
    removeIsUploading();
  });
}

// editing recipe
export const setEditRecipe=async(recipe)=>{
    store.dispatch({
        type:actionTypes.setEditRecipe,
        payload:recipe
    })
}

//removing recipe
export const removeRecipe=async(id)=>{
    return await fetch(`${process.env.REACT_APP_API}/recipe.php`, {
        method: 'POST',
        body:JSON.stringify({recipeID:id,post:'delete_recipe'})
        })
        .then(response => response.json())
        .then(data => {
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getRecipes,
                    payload:data.data
                })
            }else{
                removeIsUploading();
            }
        }).catch(err=>{
            removeIsUploading();
        })
}

//edit recipe
export const editRecipe=async(recipe)=>{
    return await fetch(`${process.env.REACT_APP_API}/recipe.php`, {
        method: 'POST',
        body:JSON.stringify({recipe,post:'update_recipe'})
        })
        .then(response => response.json())
        .then(data => {
            if(data.status===200){
                store.dispatch({
                    type:actionTypes.getRecipes,
                    payload:data.data
                })
            }else{
                removeIsUploading();
            }
        }).catch(err=>{
            removeIsUploading();
        })
}