import {useSelector} from 'react-redux';
import { useState } from 'react';
import UserNav from '../components/UserNav'
import '../css_pages/checkout.scss'
import * as actions from '../redux/actions/cartActions'

function Checkout() {
const cart = useSelector(state=>state.cart.cart);

function handleRemoveRecipe(id){
  actions.removeFromCart(id)
}

  return (<>
  <UserNav/>
  <section className='main'>
    <h3>Checkout</h3>
    <table>
      <thead>
        <tr>
          <th>List</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          cart?.map(item=><tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              {/* check the input function to handle order quantity  */}
              <input type="number" name='quantity'/>
            </td>
            <td>
              <button onClick={()=>handleRemoveRecipe(item.id)}            className='btn_remove'>remove</button>
            </td>
          </tr>)
        }
      </tbody>
    </table>
    <div className='div-btn'>
      <button className='checkout btn'>checkout</button>
    </div>
  </section>
  </>)
}

export default Checkout;