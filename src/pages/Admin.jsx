import React,{useState} from 'react'
import {AiOutlineAppstoreAdd,AiOutlineContacts,AiOutlineHome} from 'react-icons/ai'
import {BsCardChecklist} from 'react-icons/bs'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {FaUsersCog} from 'react-icons/fa';
import {SiSimpleanalytics} from 'react-icons/si'
import AddRecipe from '../components/Admin/AddRecipe'
import Analysis from '../components/Admin/Analysis'
import CheckChat from '../components/Admin/CheckChat'
import CheckConctact from '../components/Admin/CheckConctact'
import CheckUsers from '../components/Admin/CheckUsers'
import CheckOrders from '../components/Admin/CheckOrders'

function Admin() {
const [show,setShow]=useState('analysis')

  return (<div className='admin-main'>
  <section className='admin-nav'>
    <div>
        <a href='/' className='admin-nav-item'><AiOutlineHome size='18'/></a>
        <span className='admin-nav-item' onClick={()=>setShow('analysis')}><SiSimpleanalytics size='18'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('addRecipe')}><AiOutlineAppstoreAdd size='18'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkUsers')}><FaUsersCog size='18'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkOrders')}><BsCardChecklist size='18'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkChat')}><BiMessageRoundedDetail size='18'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkContact')}><AiOutlineContacts size='18'/></span>
    </div>
  </section>
  <section className='admin-body'>
    {show==='addRecipe'&&<AddRecipe/>}
    {show==='analysis'&&<Analysis/>}
    {show==='checkChat'&&<CheckChat/>}
    {show==='checkContact'&&<CheckConctact/>}
    {show==='checkUsers'&&<CheckUsers/>}
    {show==='checkOrders'&&<CheckOrders/>}
  </section>
  </div>)
}

export default Admin