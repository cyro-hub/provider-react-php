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
import '../css_pages/admin.scss'

function Admin() {
const [show,setShow]=useState('analysis')

  return (<div className='admin-main'>
  <section className='admin-nav'>
    <div>
        <a href='/' className='admin-nav-item'><AiOutlineHome size='25'/></a>
        <span className='admin-nav-item' onClick={()=>setShow('analysis')}><SiSimpleanalytics size='25'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('addRecipe')}><AiOutlineAppstoreAdd size='25'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkUsers')}><FaUsersCog size='25'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkOrders')}><BsCardChecklist size='25'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkChat')}><BiMessageRoundedDetail size='25'/></span>
        <span className='admin-nav-item' onClick={()=>setShow('checkContact')}><AiOutlineContacts size='25'/></span>
    </div>
  </section>
  <section className='admin-body'>
    {show==='addRecipe'&&<AddRecipe className='m-auto'/>}
    {show==='analysis'&&<Analysis className='m-auto'/>}
    {show==='checkChat'&&<CheckChat className='m-auto'/>}
    {show==='checkContact'&&<CheckConctact className='m-auto'/>}
    {show==='checkUsers'&&<CheckUsers className='m-auto'/>}
    {show==='checkOrders'&&<CheckOrders className='m-auto'/>}
  </section>
  </div>)
}

export default Admin