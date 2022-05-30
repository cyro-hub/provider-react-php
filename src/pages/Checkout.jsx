import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import UserNav from '../components/UserNav'
import '../css_pages/checkout.scss'
import * as actions from '../redux/actions'

function Checkout() {
const [cartList,setCartList]=useState([])
const cart = useSelector(state=>state);
console.log(cart);

function handleRemoveRecipe(id){
  actions.removeFromCart(id)
}

  return (<>
  <UserNav/>
  <section className='main'>
    <h3>Checkout</h3>
    <div className='checkout-table'>
      <div className='checkout-table-header'>
        <h4 className='table-header'>Recipe</h4>
        <h4 className='table-header'>Quantity</h4>
        <h4 className='table-header'>Amount</h4>
        <h4 className='table-header'>action</h4>
      </div>
      {
        cartList.map((recipe,index)=>(
        <div className='checkout-table-body'>
          <h5 className='table-data'>fgs</h5>
          <h5 className='table-data'>sdfgdgs</h5>
          <h5 className='table-data'>dfgs</h5>
          {/* style this button to remove item */}
          <h5 className='table-data'><button onClick={()=>handleRemoveRecipe(recipe.id)}>remove</button></h5>
        </div> 
        ))
      }
    </div>
    <div className='div-btn'>
      <button className='checkout'>checkout</button>
    </div>
  </section>
  </>)
}

export default Checkout;