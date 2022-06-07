// import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import EditRecipe from './Analysis/EditRecipe';
import Recipes from './Analysis/Recipes';
import '../../css_components/css_admin/analysis.scss'
import MinMaxOrder from './Analysis/MinMaxOrder';


function Analysis() {
const isRecipeEdit = useSelector(state=>state.recipe.isRecipeEdit)

return (<section className='admin'>
<MinMaxOrder/>
{isRecipeEdit?<EditRecipe/>:<Recipes/>}

  </section>)
}

export default Analysis