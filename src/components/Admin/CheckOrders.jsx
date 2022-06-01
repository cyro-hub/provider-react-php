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
  <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Recipe</th>
          <th>Quantity</th>
          <th>Ammount</th>
          <th>Location</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {
          orders?.map(user=><tr>
            <td>{orders.date}</td>
            <td>{orders.recipe}</td>
            <td>{orders.quantity}</td>
            <td>{orders.ammount}</td>
            <td>{orders.location}</td>
            <td>
              <button onClick={()=>handleRemoveOrder(orders.id)} className='btn_remove'>remove</button>
            </td>
          </tr>)
        }
      </tbody>
    </table></section>
  )
}

export default CheckOrders