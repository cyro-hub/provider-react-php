import React,{useState} from 'react'
import UserNav from '../components/UserNav'
import Card from '../components/Card'
import '../css_pages/user.scss'
import { useSelector } from 'react-redux'

function User() {
const [searchRecipe,setSearchRecipe]=useState('')
const recipes = useSelector(state=>state.recipe.recipes);
 
  return (<>
  <UserNav/>
  <section className='main'>
    <div className="welcome">
        <h2 className="">Select a Recipe</h2>
        <input type="text" 
               name='search' 
               className='search' 
               id='search' 
               placeholder='search' 
               value={searchRecipe} autoComplete="off"
               onChange={(e)=>setSearchRecipe(e.target.value)}
        />
    </div>
    <div className='section'>
        <div className='card-items'>
            {recipes?.filter(recipe=>recipe.name.toLocaleLowerCase().includes(searchRecipe.toLocaleLowerCase())).map((recipe,index)=><Card key={index} recipe={recipe}/>)}
        </div>
    </div>
  </section>
  </>)
}

export default User