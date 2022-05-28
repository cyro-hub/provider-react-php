import React,{useState,useEffect} from 'react';
import '../css_components/form.scss'

function Contact() {
const [contact,setContact]=useState({
    name:'',
    region:'',
    town:'',
    message:''
});
const [warning,setWarning]=useState('')

const handleChanges=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(contact.name===''||contact.region===''||contact.town===''||contact.message===''){
        setWarning('Either the name,Region,Town,Message field is empty')
        return
    }
}

useEffect(()=>{
    const timer = setTimeout(()=>{
        setWarning('')
    },4000)
    return ()=>clearTimeout(timer)
})
  return (<form onSubmit={(e)=>handleSubmit(e)} className='form'>
      <div className='input-div'>{warning&&<p className='warning'>{warning}</p>}</div>
      <div className='input-div'>
          <input className='input' type="text" name='name' 
          value={contact.name} 
          onChange={(e)=>handleChanges(e)} placeholder='Name'/>
      </div>
      <div className='input-div'>
          <input className='input' type="text" name='region' 
          value={contact.region} 
          onChange={(e)=>handleChanges(e)} placeholder='Region'/>
      </div>
      <div className='input-div'>
          <input className='input' type="text" name='town' 
          value={contact.town} 
          onChange={(e)=>handleChanges(e)} placeholder='Town'/>
      </div>
      <div className='input-div'>
          <textarea className='input-textarea' type="text" name='message' cols="30" rows="5"
          value={contact.message} 
          onChange={(e)=>handleChanges(e)} placeholder='Message'></textarea>
      </div>
      <div className='input-div'>
          <input type="submit" className='submit contact'/>
      </div>
  </form>)
}

export default Contact