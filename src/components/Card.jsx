import React from 'react'
import {BsCartPlus} from 'react-icons/bs'

function Card({obj}) {

  return (
    <div className='card'>
        <div className='card-img-container'>
        <img loading='lazy' src='' alt="/" className='card-img' />
        <div className='img-cover'></div>
        </div>
        <div className='card-details'>
            <h1 className='card-name'>{obj.name+" $"+obj.price}</h1>
            <div className='card-description'>
                <p className=''>
                    {obj.description} 
                </p>
                <BsCartPlus size='20' className='card-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Card