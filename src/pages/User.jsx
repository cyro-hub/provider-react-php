import React,{useState,useEffect,useCallback} from 'react'
import UserNav from '../components/UserNav'
import Card from '../components/Card'
import '../css_pages/user.scss'

function User() {
const [searchRecipe,setSearchRecipe]=useState('')
const [recipes,setRecipes]=useState([
    {
        name:'ekwange',
        id:12
    },
    {
        name:'eru',
        id:13
    },
    {
        name:'egg',
        id:14
    },
    {
        name:'fufu',
        id:15
    },
    {
        name:'garri',
        id:16
    },
    {
        name:'shawama',
        id:17
    },
    {
        name:'chicken',
        id:18
    },
    {
        name:'meat',
        id:19
    }
])

const handleSearch = useCallback(()=>{
    const newRecipes = JSON.parse(localStorage.getItem('recipes')).filter(({name}) => name.match(searchRecipe))
    setRecipes(newRecipes);
},[searchRecipe])

// function for the fetch api
useEffect(()=>{
    const getRecipes =async()=>{
        // perform search here for backend
        localStorage.setItem('recipes',JSON.stringify(recipes)) 
    }
    getRecipes()
},[])

// function for handling the search
useEffect(()=>{
    handleSearch()
},[searchRecipe,handleSearch])
 
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
               value={searchRecipe} 
               onChange={(e)=>setSearchRecipe(e.target.value)}
        />
    </div>
    <div className='section'>
        <div className='card-items'>
            {recipes.map((recipe,index)=><Card key={index} recipe={recipe}/>)}
        </div>
    </div>
  </section>
  </>)
}

export default User