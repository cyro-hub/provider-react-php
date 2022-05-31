import {useSelector} from 'react-redux';
import '../../css_pages/checkout.scss'
import * as actions from '../../redux/actions/userActions'


function CheckUsers() {
  const users = useSelector(state=>state.user.users);
  
  console.log(users)

  function handleRemoveUser(id){
    actions.removeFromUsers(id)
  }

  return (<section className='main'>
  <h3>Users</h3>
  <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Reg_date</th>
        <th>Location</th>
        <th>action</th>
      </thead>
      <tbody>
        {
          users?.map(user=><tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.registration_date}</td>
            <td>{user.location}</td>
            <td>
              <button onClick={()=>handleRemoveUser(user.id)}            className='btn_remove'>remove</button>
            </td>
          </tr>)
        }
      </tbody>
    </table>
 </section>
  )
}

export default CheckUsers