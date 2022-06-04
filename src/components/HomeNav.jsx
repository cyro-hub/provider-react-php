import React,{useState,useEffect} from 'react'
import {MdOutlineGridView} from 'react-icons/md'
import {BiUser,BiMessageRoundedDots} from 'react-icons/bi'
import {RiFullscreenExitFill,RiShoppingCart2Line} from 'react-icons/ri';
import {AiOutlineHome} from 'react-icons/ai'
import '../css_components/homenav.scss'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

function HomeNav() {
const [showMenu,setShowMenu] = useState(false)
const cart = useSelector(state=>state.cart.cart.length)

const changes=()=>{
  if(window.innerWidth>640){
    setShowMenu(false);
  }
}
useEffect(()=>{
window.addEventListener('resize',changes)
return ()=>{
  window.removeEventListener('resize',changes)
}
})

  return (<section className='nav'>
    <div className='nav-list'>
        <Link to='/' className='nav-item'><AiOutlineHome size='28' className='nav-icon'/></Link>
        <Link to='/cart' className='nav-item'><RiShoppingCart2Line size='28' className='nav-icon'/>
      <span className='nav-tooltip'>{cart}</span>
      </Link>
        <Link to='/chat' className='nav-item'><BiMessageRoundedDots size='28' className='nav-icon'/>
      <span className='nav-tooltip'>{}</span>
      </Link>
      <Link to='/login' className='nav-item'><BiUser size='28' className='nav-icon'/></Link>
    </div>
    {
    showMenu?
    <RiFullscreenExitFill size='30' className='m-nav-menu' onClick={()=>setShowMenu(!showMenu)}/>:
    <MdOutlineGridView size='30' className='m-nav-menu' onClick={()=>setShowMenu(!showMenu)}/>
    }
    {
    showMenu&&<div className='menu'>
        <Link to='/'  onClick={()=>setShowMenu(!showMenu)} className='m-nav-item'>Home</Link>
        <Link to='/user'  onClick={()=>setShowMenu(!showMenu)} className='m-nav-item'>Order Recipe</Link>
        <Link to='/cart'  onClick={()=>setShowMenu(!showMenu)} className='m-nav-item'>Checkout</Link>
        <Link to='/chat' onClick={()=>setShowMenu(!showMenu)} className='m-nav-item'>Messages {}</Link>
        <Link to='/login' onClick={()=>setShowMenu(!showMenu)} className='m-nav-item'>Login</Link>
    </div>
    }
  </section>)
}

export default HomeNav