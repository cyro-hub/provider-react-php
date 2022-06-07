import React from 'react';
import {useSelector} from 'react-redux';
import * as recipeActions from '../../../redux/actions/recipeActions';


function Recipes() {
const recipes = useSelector(state=>state.recipe.recipes);


const handleEditRecipe=(recipe)=>{
   recipeActions.setEditRecipe(recipe);
}

const handleRemoveRecipe=(id)=>{
   recipeActions.removeRecipe(id);
}

return (
<div className='recipe_table'>
<h3>Recipes</h3>
<table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>From</th>
          <th className='action'>Delivery</th>
          <th className='action'>Status</th>
          <th className='actions'>action</th>
        </tr>
      </thead>
      <tbody className='scroll'>
        {
          recipes?.map(recipe=><tr key={recipe.recipeID}>
            <td>{recipe.name}</td>
            <td>{recipe.price}</td>
            <td>{recipe.location}</td>
            <td className='action'>{recipe.delivery==='1'?'yes':'no'}</td>
            <td className='action'>{recipe.status==='1'?'high':'low'}</td>
            <td className='actions'>
              <button onClick={()=>handleEditRecipe(recipe)} className='btn_edit'>Edit</button>
              <button onClick={()=>handleRemoveRecipe(recipe.recipeID)} className='btn_remove'>remove</button>
            </td>
          </tr>)
        }
      </tbody>
    </table>
</div>
  )
}

export default Recipes