import React,{useState,useEffect,useRef} from 'react'
import UserNav from '../components/UserNav'
import {MdLocationOn,MdSend} from 'react-icons/md'
import '../css_pages/chat.scss'
import { useSelector } from 'react-redux'
import * as actions  from '../redux/actions/chatActions';

function Chat() {
const [searchMessage,setSearchMessage]=useState('')
const messages = useSelector(state=>state.chat.chats);

const bottomMessage = useRef();

const [message,setMessage]=useState({
  location:'',
  message:'',
  name:JSON.parse(localStorage.getItem('token'))||''
})
const [warning,setWarning]=useState('');

const handleMessage=(e)=>{
  setMessage({...message,[e.target.name]:e.target.value})
}

const handleSend=async()=>{
  actions.sendMessage(message);
  setMessage({
    location:'',
    message:'',
    name:JSON.parse(localStorage.getItem('token'))||''
  })
}

const handleLocation=async()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      setMessage({...message,location:position.coords.latitude+' '+position.coords.longitude})
    });
    return;
  }
  setWarning('The location is not available');
}
useEffect(()=>{
  bottomMessage.current?.scrollIntoView({ behavior: "smooth" })
},[messages])

useEffect(()=>{
  const timer = setInterval(()=>{
    // console.log('helo')
    setWarning('')
    const credentials = JSON.parse(localStorage.getItem('token'))||'';
    actions.getMessageByName(credentials);
  },300)
  return ()=>clearInterval(timer)
})
  return (<>
  <UserNav/>
  <section className='main chat'>
      <input type="search" 
             placeholder='search message' 
             name="search" 
             onChange={(e)=>setSearchMessage(e.target.value)} 
             id='search' 
             className='search'/>
      {/* chat section  */}

    <div>{warning&&<p className='warning'>{warning}</p>}</div>
    <div className='messages scroll'>
        {
        messages?.map(message=><React.Fragment key={message.chatID}>
          {message.role==='admin'&&<p className='message message-left'>
              {message.message}
            <span className='date-right'>{message.date}</span>
          </p>}
          {message.role==='user'&&<p className='message message-right'>
              {message.message}
            <span className='date-left'>{message.date}</span>
          </p>}</React.Fragment>)
        }
   <p className='message' ref={bottomMessage}></p>
    </div>

    <div className='message-send'>
      <MdLocationOn onClick={()=>handleLocation()} className='send-icon' size='25'/>
      <input type="text" name='message' id='message'
             value={message.message}
             onChange={e=>handleMessage(e)} 
             className='message-input' 
             placeholder='type a message'
             onKeyDown={(e)=>{
              if(e.keyCode === 13){
                handleSend()
              }
            }}/>
      <MdSend onClick={()=>handleSend()} className='send-icon' size='25'/>
    </div>
  </section>
  </>)
}

export default Chat