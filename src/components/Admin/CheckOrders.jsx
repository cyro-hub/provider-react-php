import {useSelector} from 'react-redux';
import { useState } from 'react';
import '../../css_pages/checkout.scss'
import * as actions from '../../redux/actions/cartActions'

function CheckOrders() {
  const orders = useSelector(state=>state.cart.orders);
  const [showDetailsId,setShowDetailsId] = useState(null);
  
  function handleRemoveOrder(id){
    actions.deleteOrder(id)
  }

  function handleShowDetails(id){
    setShowDetailsId(id)
  }

  return (<section className='main'>
  <h3>Orders</h3>
  <table>
      <thead>
        <tr>
          <th>OrderID</th>
          <th>Date</th>
          <th>To</th>
          <th className='action'>action</th>
        </tr>
      </thead>
      <tbody className='scroll'>
        {
          orders?.map((order,i)=><tr key={i} onClick={()=>handleShowDetails(order.OrderID)}>
            {
              (showDetailsId === order.OrderID)&&<Details details={order.details} total={order.total} name={order.name}/>
            }
            <td>{order.OrderID}</td>
            <td>{order.orderDate}</td>
            <td>{order.name}</td>
            <td className='action'>
              <button onClick={()=>handleRemoveOrder(order.id)} className='btn_remove'>remove</button>
            </td>
          </tr>)
        }
      </tbody>
    </table>
    </section>
  )
}

export default CheckOrders


const Details=({details,total,name})=>{

const orders = (JSON.parse(details));

  return(<>
  <td className='order_details'>
    <span className='col'>{name}</span>
    <span className='col head'>
      <span>Recipe</span>
      <span>Prices</span>
    </span>
    {
      orders?.map((detail,i)=><span className='col' key={i}>
        <span>{detail.name}</span>
        <span>{detail.price}</span>
        </span>)
    }
    <span className='col'>{`$ ${total}`}</span>
  </td>
  </>)
}