import {useSelector} from 'react-redux';
import '../../css_pages/checkout.scss'
import * as actions from '../../redux/actions/contactActions'

function CheckContact() {
  const contactMessages = useSelector(state=>state.contactMessages);
  
  function handleRemoveContactMessage(id){
    actions.removeFromContactMessage(id)
  }

  return (<section className='main'>
  <h3>Contact Messages</h3></section>
  )
}

export default CheckContact