import React,{useState,useEffect} from 'react';
import {GoLocation} from "react-icons/go";
import {AiOutlineSend,AiOutlineWechat} from "react-icons/ai"

function CheckChat() {
const [message,setMessage]=useState({
    id:(new Date()).toString(),
    message:'',
    role:'username',
    date:(new Date()).toDateString(),
    name:'admin'
});
const [search,setSearch]=useState('');
const [names,setNames]=useState([
  {name:'Ali'},
  {name:'musa'},
]);
const [chats,setChats]=useState([{id:1,
  name:'syril',
  role:'user',
  message:"this is a messsage",
  location:'',
  date:'11/12/21'},
  {id:2,
    name:'admin',
    role:'admin',
    message:"asdff dfewr dfsfsf",
    location:'',
    date:'11/12/21'}]);
const [name,setName]=useState('')

const handleSend=async()=>{
    console.log((new Date()).toDateString())
}
    
const handleLocation=async()=>{
      navigator.geolocation.getCurrentPosition(function(position) {
        setMessage({...message,message:position.coords.latitude+' '+position.coords.longitude})
      });
}

const handleMessage=(e)=>{
  setMessage({...message,[e.target.name]:e.target.value})
}

const viewChat=(name)=>{
  // perform a the fetch to the database with the particular chat
  setName(name);
}

useEffect(()=>{
  // make a fetch to return all the chats

},[name])

  return (<section className=''>
  <div className='section'>
    <h1 className='section-header'>Chats</h1>
  </div>
      <input type="search" placeholder='search' name="search"   onChange={(e)=>setSearch(e.target.value)} id='search'   className='search' value={search}/>
      {/* name of chats  */}
    <div className='chat-body'>
      <div className='chat-names'>
      {
        names.map((name,index)=>
          <div key={index} onClick={()=>viewChat(name.name)} className=''>
            <h1 className=''>Name</h1>
            <p className=''>last message 
              {/* use map for mapping 3 words and display the others with a triple dot  */}
              <span className=''>1/2/21</span>
            </p>
          </div>)
      }
      </div>
      {/* name of chats  */}
      <div className='chats'>
      {name&&
        chats.map(chat=><React.Fragment key={chat.id}>
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
      </div>
    </div>
  <div className='message-send'>
        <GoLocation onClick={()=>handleLocation()} className='send-icon' size='20'/>
        <input type="text" 
               name='message' 
               id='message' 
               onChange={e=>handleMessage(e)} 
               className='message-input'/>
        <AiOutlineSend onClick={()=>handleSend()} className='send-icon' size='20'/>
      </div>
</section>)
}

export default CheckChat