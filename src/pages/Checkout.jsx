import {useSelector} from 'react-redux';
import UserNav from '../components/UserNav'
import '../css_pages/checkout.scss'
import * as actions from '../redux/actions/cartActions'

function Checkout() {
const cart = useSelector(state=>state.cart.cart);

function handleRemoveRecipe(id,cart){
  actions.removeFromCart(id,cart)
}

const handleChanges =(e,index)=>{
  
}

  return (<>
  <UserNav/>
  <section className='main'>
    <h3>Checkout</h3>
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
          cart?.map((item,index)=><tr key={index}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{`$` +item.price}</td>
            <td>
              <button onClick={()=>handleRemoveRecipe(index,cart)} className='btn_remove'>remove</button>
            </td>
          </tr>)
        }
      </tbody>
    </table>
    <div className='div-btn'>
      <button className='checkout btn'>{cart.reduce((a,b) => { return parseFloat(a.price)+parseFloat(b.price)},0)}checkout</button>
    </div>
  </section>
  </>)
}

export default Checkout;