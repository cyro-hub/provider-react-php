import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import UserNav from '../components/UserNav'

function Checkout() {
const [cartList,setCartList]=useState([])
const cart = useSelector(state=>state.cart);
console.log(cart)
  return (<>
  <UserNav/>
  <section className='main'>
    <h2 className='checkout-header'>Checkout</h2>
    <div className='checkout-table'>
      <div className='checkout-table-header'>
        <h1 className='table-header'>List</h1>
        <h1 className='table-header'>Quantity</h1>
        <h1 className='table-header'>Amount</h1>
        <h1 className='table-header'>action</h1>
      </div>
      {
        cartList.map((item,index)=>(
        <div className='checkout-table-body'>
          <h1 className='table-data'>{item.name}</h1>
          <h1 className='table-data'></h1>
          <h1 className='table-data'>Amm{}</h1>
          <h1 className='table-data'>ac{}</h1>
        </div>
        ))
      }
    </div>
  </section>
  </>)
}

export default Checkout