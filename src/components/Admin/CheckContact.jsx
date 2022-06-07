import {useSelector} from 'react-redux';
import '../../css_pages/checkout.scss'
import * as actions from '../../redux/actions/contactActions'

function CheckContact() {
  const contacts = useSelector(state=>state.contact.contacts);
  
  function handleRemoveContactMessage(id){
    actions.removeFromContactMessage(id)
  }

  return (<section className='main'>
  <h3>Contact Messages</h3>
  <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th className='action'>Region</th>
          <th>Town</th>
          <th>Message</th>
          <th className='action'>action</th>
        </tr>
      </thead>
      <tbody className='scroll'>
        {
          contacts?.map(message=><tr key={message.contactID}>
            <td>{message.contactDate}</td>
            <td>{message.name}</td>
            <td className='action'>{message.region}</td>
            <td>{message.town}</td>
            <td>{message.message}</td>
            <td className='action'>
              <button onClick={()=>handleRemoveContactMessage(message.contactID)} className='btn_remove'>remove</button>
            </td>
          </tr>)
        }
      </tbody>
    </table></section>
  )
}

export default CheckContact