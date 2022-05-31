import {useSelector} from 'react-redux';
import '../../css_pages/checkout.scss'
import * as actions from '../../redux/actions/contactActions'

function CheckContact() {
  const contactMessages = useSelector(state=>state.contactMessages);
  
  function handleRemoveContactMessage(id){
    actions.removeFromContactMessage(id)
  }

  return (<section className='main'>
  <h3>Contact Messages</h3>
  <div className='checkout-table'>
    <div className='checkout-table-header'>
      <h4 className='table-header'>Region</h4>
      <h4 className='table-header'>Town</h4>
      <h4 className='table-header'>Message</h4>
      <h4 className='table-header'>action</h4>
    </div>
    {
      contactMessages?.map((message,i)=>(
      <div className='checkout-table-body'>
        <h5 className='table-data'>{message.region}</h5>
        <h5 className='table-data'>{message.town}</h5>
        <h5 className='table-data'>{message.message}</h5>
        {/* style this button to remove item */}
        <h5 className='table-data'><button onClick={()=>handleRemoveContactMessage(message.id)}>remove</button></h5>
      </div> 
      ))
    }
  </div></section>
  )
}

export default CheckContact