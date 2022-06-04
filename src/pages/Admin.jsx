import React,{useState,useEffect} from 'react'
import {AiOutlineAppstoreAdd,AiOutlineContacts,AiOutlineHome} from 'react-icons/ai'
import {BsCardChecklist} from 'react-icons/bs'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {FaUsersCog} from 'react-icons/fa';
import {SiSimpleanalytics} from 'react-icons/si'
import {MdLocationPin} from 'react-icons/md'
import AddRecipe from '../components/Admin/AddRecipe'
import Analysis from '../components/Admin/Analysis'
import CheckChat from '../components/Admin/CheckChat'
import CheckContact from '../components/Admin/CheckContact'
import CheckUsers from '../components/Admin/CheckUsers'
import CheckOrders from '../components/Admin/CheckOrders'
import '../css_pages/admin.scss'
import {Link} from 'react-router-dom';
import AddLocation from '../components/Admin/AddLocation';
import * as user from '../redux/actions/userActions';
import * as contact from '../redux/actions/contactActions'

function Admin() {
const [show,setShow]=useState('analysis')

useEffect(()=>{
  user.getUsers()
  contact.getContacts()
},[])

  return (<div className='admin-main'>
  <section className='admin-nav'>
    <div>
        <Link to='/' className='admin-nav-item'><AiOutlineHome size='24'/></Link>
        <span className='admin-nav-item' onClick={()=>setShow('analysis')}><SiSimpleanalytics size='24'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('addRecipe')}><AiOutlineAppstoreAdd size='24'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkUsers')}><FaUsersCog size='24'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkOrders')}><BsCardChecklist size='24'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkChat')}><BiMessageRoundedDetail size='24'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkContact')}><AiOutlineContacts size='24'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('addlocation')}><MdLocationPin size='24'/></span>
    </div>
  </section>
  <section className='admin-body'>
    {show==='addRecipe'&&<AddRecipe className='m-auto'/>}
    {show==='analysis'&&<Analysis className='m-auto'/>}
    {show==='checkChat'&&<CheckChat className='m-auto'/>}
    {show==='checkContact'&&<CheckContact className='m-auto'/>}
    {show==='checkUsers'&&<CheckUsers className='m-auto'/>}
    {show==='checkOrders'&&<CheckOrders className='m-auto'/>}
    {show==='addlocation'&&<AddLocation className='m-auto'/>}
  </section>
  </div>)
}

export default Admin