import React,{useState,useEffect,useRef} from 'react';
import {MdLocationOn,MdSend} from 'react-icons/md'
import { useSelector } from 'react-redux';
import '../../css_components/css_admin/checkchat.scss'
import * as actions from '../../redux/actions/chatActions'

function CheckChat() {
const bottomMessage = useRef();

const [message,setMessage]=useState({
    message:'',
    location:''
});
const [email,setEmail]=useState('');
const [search,setSearch]=useState('');
const users = useSelector(state => state.chat.users)
const chats = useSelector(state => state.chat.chats);

const handleSend=async()=>{
  actions.sendMessageByAdmin({...message,email:email})
  setMessage({
    message:'',
    location:''
})
}
    
const handleLocation=async()=>{
      navigator.geolocation.getCurrentPosition(function(position) {
        setMessage({...message,message:position.coords.latitude+' '+position.coords.longitude})
      });
}

const handleMessage=(e)=>{
  setMessage({...message,[e.target.name]:e.target.value})
}

const viewChat=(email)=>{
  setEmail(email);
  actions.getChatsByEmail(email)
}
useEffect(()=>{
  bottomMessage.current?.scrollIntoView({ behavior: "smooth" })
},[message])

useEffect(()=>{
  const timer = setInterval(()=>{
    actions.getUsers();
    actions.getChatsByEmail(email)
  },10000)
  return ()=>clearInterval(timer)
})

  return (<section className='main chat admin'>
      <input type="search" placeholder='search' name="search"   onChange={(e)=>setSearch(e.target.value)} id='search'  autoComplete="off" className='search' value={search}/>
      {/* name of chats  */}
    <div className='chat-body'>
      <div className='chat-names scroll'>
      {
        users?.map((user,index)=>
          <div key={index} onClick={()=>viewChat(user.email)} className='name'>
            <h1 className=''>{user.userName}</h1>
          </div>)
      }
      </div>
      {/* name of chats  */}
      <div className='chats scroll'>
      {
        chats?.filter(chat=>chat.message.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(chat=><React.Fragment key={chat.chatID}>
          {chat.role==='admin'&&<p className='message message-right'>
            <span className='user-right'>{chat.name}</span>
              {chat.message}
            <span className='date-left'>{chat.date}</span>
          </p>}
          {chat.role==='user'&&<p className='message message-left'>
            <span className='user-left'>{chat.name}</span>
              {chat.message}
            <span className='date-right'>{chat.date}</span>
          </p>}
          </React.Fragment>)}
          <p className='message' ref={bottomMessage}></p>
      </div>
    </div>
  <div className='message-send'>
        <MdLocationOn onClick={()=>handleLocation()} className='send-icon' size='20'/>
        <input type="text" 
               name='message' 
               id='message' autoComplete="off"
               value={message.message}
               onChange={e=>handleMessage(e)} 
               className='message-input'
               onKeyDown={(e)=>{
                 if(e.keyCode === 13){
                   handleSend()
                 }
               }}/>
        <MdSend onClick={()=>handleSend()} className='send-icon' size='20'/>
      </div>
</section>)
}

export default CheckChat