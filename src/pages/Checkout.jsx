import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import UserNav from '../components/UserNav'
import '../css_pages/checkout.scss'
import * as actions from '../redux/actions/cartActions'

function Checkout() {
const [total,setTotal]=useState(0);
const cart = useSelector(state=>state.cart.cart);
const orderID = useSelector(state=>state.cart.previousOrder);

const [show,setShow]=useState(false);

function handleRemoveRecipe(id,cart){
  actions.removeFromCart(id,cart)
}

function handleOnMouseEnter(){
  setShow(true);
}

function handleOnMouseLeave(){
  setShow(false);
}

const handleSubmit=(total)=>{
  if(cart.length>0){
    actions.addOrder(cart,total)
  }
}

useEffect(()=>{
  let sum = cart.reduce(function (accumulator, curValue) {
    return accumulator + parseFloat(curValue.price)
  }, 0)

  setTotal(sum);
},[cart])

  return (<>
  <UserNav/>
  <section className='main'>
    <h3>Checkout</h3>
    <h4>Previous OrderID </h4>
    <h5>{orderID}</h5>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>List</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='scroll'>
        {
          cart?.map((item,index)=><tr key={index} >
            <td onMouseOver={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
              {index+1}
            </td>
            <td>
              {item.name}
              {show&&<img className='preview' src={item.imageUrl} alt={item.name}/>}
            </td>
            <td>{`$` +item.price}</td>
            <td>
              <button onClick={()=>handleRemoveRecipe(index,cart)} className='btn_remove'>remove</button>
            </td>
          </tr>)
        }
      </tbody>
    </table>
    <div className='div-btn'>
      <button className='checkout btn' onClick={()=>handleSubmit(total.toFixed(2))}>{'$ '+total.toFixed(2)+' '}checkout</button>
    </div>
  </section>
  </>)
}

export default Checkout;