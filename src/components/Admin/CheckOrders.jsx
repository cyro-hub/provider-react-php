import {useSelector} from 'react-redux';
import '../../css_pages/checkout.scss'
import * as actions from '../../redux/actions/cartActions'

function CheckOrders() {
  const orders = useSelector(state=>state.order);
  
  function handleRemoveOrder(id){
    actions.removeFromOrders(id)
  }

  return (<section className='main'>
  <h3>Orders</h3>
  <div className='checkout-table'>
    <div className='checkout-table-header'>
      <h4 className='table-header'>Date</h4>
      <h4 className='table-header'>Recipe</h4>
      <h4 className='table-header'>Quantity</h4>
      <h4 className='table-header'>Amount</h4>
      <h4 className='table-header'>action</h4>
    </div>
    {
      orders?.map((order)=>(
      <div className='checkout-table-body'>
        <h5 className='table-data'>{order.date}</h5>
        <h5 className='table-data'>{order.recipe}</h5>
        <h5 className='table-data'>{order.quantity}</h5>
        <h5 className='table-data'>{order.amount}</h5>
        {/* style this button to remove item */}
        <h5 className='table-data'><button onClick={()=>handleRemoveOrder(order.id)}>remove</button></h5>
      </div> 
      ))
    }
  </div></section>
  )
}

export default CheckOrders