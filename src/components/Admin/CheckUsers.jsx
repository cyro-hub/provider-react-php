import {useSelector} from 'react-redux';
import '../../css_pages/checkout.scss'
import * as actions from '../../redux/actions/userActions'


function CheckUsers() {
  const users = useSelector(state=>state.user.users);

  function handleRemoveUser(id){
    actions.removeFromUsers(id)
  }

  return (<section className='main'>
  <h3>Users</h3>
  <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Reg_date</th>
          <th>Location</th>
          <th className='action'>action</th>
        </tr>
      </thead>
      <tbody>
        {
          users?.map(user=><tr key={user.userID}>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.registrationDate}</td>
            <td>{user.location}</td>
            <td className='action'>
              <button onClick={()=>handleRemoveUser(user.userID)} className='btn_remove'>remove</button>
            </td>
          </tr>)
        }
      </tbody>
    </table>
 </section>
  )
}

export default CheckUsers