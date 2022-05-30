import React,{useState,useEffect,useCallback} from 'react'
import UserNav from '../components/UserNav'
import {MdLocationOn,MdSend} from 'react-icons/md'
import '../css_pages/chat.scss'

function Chat() {
const [searchMessage,setSearchMessage]=useState('')
const [messages,setMessages] = useState([
  {id:1,
  name:'syril',
  role:'user',
  message:"this is ajdf jsdflladsf jkdfl asdfjkoldfksdfl;lksdkdfkksdfk ksdfl kssd ksdfkk kklsdfk messsage",
  location:'',
  date:'11/12/21'},
  {id:2,
    name:'admin',
    role:'admin',
    message:"asdff dfewr dfsfsf",
    location:'',
    date:'11/12/21'},
]);

const [message,setMessage]=useState({
  id:(new Date()).toString(),
  location:'',
  message:'',
  to:'admin',
  date:(new Date()).toDateString(),
  user:JSON.parse(localStorage.getItem('user'))&&JSON.parse(localStorage.getItem('user')).name
})
const [warning,setWarning]=useState('');

const handleMessage=(e)=>{
  setMessage({...message,[e.target.name]:e.target.value})
}

const handleSearchMessage = useCallback(()=>{
  const newMessage = JSON.parse(localStorage.getItem('messages')).filter(({message}) => message.match(searchMessage))
  setMessages(newMessage);
},[searchMessage])

const handleSend=async()=>{
console.log((new Date()).toDateString())
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

// function for the fetch api
useEffect(()=>{
  const getMessages =async()=>{
      // perform search here for backend
      localStorage.setItem('messages',JSON.stringify(messages)) 
  }
  getMessages()
},[])

// function for handling the search
useEffect(()=>{
  handleSearchMessage()
},[searchMessage,handleSearchMessage])

useEffect(()=>{
  const timer = setTimeout(()=>{
      setWarning('')
  },4000)
  return ()=>clearTimeout(timer)
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
        messages.map(message=><React.Fragment key={message.id}>
          {message.role==='admin'&&<p className='message message-left'>
              {message.message}
            <span className='date-right'>{message.date}</span>
          </p>}
          {message.role==='user'&&<p className='message message-right'>
              {message.message}
            <span className='date-left'>{message.date}</span>
          </p>}</React.Fragment>)
        }
   
    </div>

    <div className='message-send'>
      <MdLocationOn onClick={()=>handleLocation()} className='send-icon' size='25'/>
      <input type="text" name='message' id='message' onChange={e=>handleMessage(e)} className='message-input' placeholder='type a message'/>
      <MdSend onClick={()=>handleSend()} className='send-icon' size='25'/>
    </div>
  </section>
  </>)
}

export default Chat