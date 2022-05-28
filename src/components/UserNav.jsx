import {useState,useEffect} from 'react'
import {MdOutlineGridView} from 'react-icons/md'
import {BiUser,BiMessageRoundedDots} from 'react-icons/bi'
import {RiFullscreenExitFill,RiShoppingCart2Line} from 'react-icons/ri';
import {AiOutlineHome} from 'react-icons/ai';
import '../css_components/homenav.scss'

function UserNav() {
const [showMenu,setShowMenu] = useState(false)
const [messages,setMessages]=useState(10)

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
    <a href='/' className='nav-item'><AiOutlineHome size='28' className='nav-icon'/></a>
        <a href='/chechout' className='nav-item'><RiShoppingCart2Line size='28' className='nav-icon'/>
      <span className='nav-tooltip'>{messages}</span>
      </a>
      <a href='/chat' className='nav-item'><BiMessageRoundedDots size='28' className='nav-icon'/>
      <span className='nav-tooltip'>{messages}</span>
      </a>
      <a href='/login' className='nav-item'><BiUser size='28' className='nav-icon'/></a>
    </div>
    {
    showMenu?
    <RiFullscreenExitFill size='30' className='m-nav-menu' onClick={()=>setShowMenu(!showMenu)}/>:
    <MdOutlineGridView size='30' className='m-nav-menu' onClick={()=>setShowMenu(!showMenu)}/>
    }
    {
    showMenu&&<div className='menu'>
        <a href='/#tour' className='m-nav-item'>Tour</a>
        <a href='/#about' className='m-nav-item'>About</a>
        <a href='/#services' className='m-nav-item'>Services</a>
        <a href='/#contact' className='m-nav-item'>Contact</a>
        <a href='/user' className='m-nav-item'>Order Recipe</a>
        <a href='/chat' className='m-nav-item'>Messages {messages}</a>
        <a href='/login' className='m-nav-item'>Login</a>
    </div>
    }
  </section>)
}

export default UserNav