import {useSelector} from 'react-redux';
import '../../css_pages/checkout.scss'
import * as actions from '../../redux/actions/userActions'


function CheckUsers() {
  const users = useSelector(state=>state.users);
  
  function handleRemoveUser(id){
    actions.removeFromUsers(id)
  }

  return (<section className='main'>
  <h3>Users</h3>
  <div className='checkout-table'>
    <div className='checkout-table-header'>
      <h4 className='table-header'>#</h4>
      <h4 className='table-header'>Name</h4>
      <h4 className='table-header'>email</h4>
      <h4 className='table-header'>Reg_Date</h4>
      <h4 className='table-header'>action</h4>
    </div>
    {
      users?.map((users,i)=>(
      <div className='checkout-table-body'>
        <h5 className='table-data'>{i+1}</h5>
        <h5 className='table-data'>{users.name}</h5>
        <h5 className='table-data'>{users.email}</h5>
        <h5 className='table-data'>{users.reg_date}</h5>
        {/* style this button to remove item */}
        <h5 className='table-data'><button onClick={()=>handleRemoveUser(users.id)}>remove</button></h5>
      </div> 
      ))
    }
  </div></section>
  )
}

export default CheckUsers