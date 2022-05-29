import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import '../css_components/card.scss'

function Card({obj}) {

  return (
    <div className='card'>
        <div className='card-img-container'>
        <img loading='lazy' src='https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg' alt="/" className='card-img' />
        <div className='img-cover'>
          <h4 className='card-name'>{obj.name+" $"+obj.price}</h4>
          <BsFillCartFill size='30' className='card-icon'/>
        </div>
        </div>
    </div>
  )
}

export default Card