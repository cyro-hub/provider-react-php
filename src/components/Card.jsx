import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import * as actions from '../redux/actions';
import '../css_components/card.scss'

function Card({recipe}) {
const handleAddToCart=(recipe)=>{
  actions.addToCart(recipe);
}

  return (
    <div className='card'>
        <div className='card-img-container'>
        <img loading='lazy' src='https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg' alt="/" className='card-img' />
        <div className='img-cover'>
          <h4 className='card-name'>{recipe.name+" $"+recipe.price}</h4>
          <BsFillCartFill onClick={()=>handleAddToCart(recipe)} size='30' className='card-icon'/>
        </div>
        </div>
    </div>
  )
}

export default Card