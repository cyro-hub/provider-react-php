import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import * as contactActions from '../redux/actions/contactActions'
import * as locationActions  from '../redux/actions/locationActions'
import '../css_components/form.scss'

function Contact() {
const [contact,setContact]=useState({
    name:'',
    region:'',
    town:'',
    message:''
});
const regions = useSelector(state=>state.location.regions);
const towns = useSelector(state=>state.location.towns);


const [warning,setWarning]=useState('');
const success = useSelector(state=>state.contact.success);

const handleChanges=(e)=>{
    if(e.target.name === 'region'){
        locationActions.getTowns(e.target.value)
    }
    setContact({...contact,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(contact.name===''||contact.region===''||contact.town===''||contact.message===''){
        setWarning('Either the name,Region,Town,Message field is empty')
        return
    }
    contactActions.addContact(contact);
    setContact({
        name:'',
        region:'',
        town:'',
        message:''
    })
}



useEffect(()=>{
    const timer = setTimeout(()=>{
        setWarning('')
        contactActions.removeSuccess()
    },4000)
    return ()=>clearTimeout(timer)
})
  return (<form onSubmit={(e)=>handleSubmit(e)} className='form'>
      <div className='input-div'>{warning&&<p className='warning'>{warning}</p>}</div>
      <div>{success&&<p className='success'>{success}</p>}</div>
      <div className='input-div'>
          <input className='input' type="text" autoComplete="off" name='name' 
          value={contact.name} 
          onChange={(e)=>handleChanges(e)} placeholder='Name'/>
      </div>
      <div className='input-div'>
        <select className='input' autoComplete="off" name='region' 
             onChange={(e)=>handleChanges(e)}>
            <option value="">Your Region</option>
                {
                    regions?.map((region,i)=><option className='option' key={i} value={region.region}>{region.region}</option>)
                }
        </select>
      </div>
      <div className='input-div'>
        <select className='input' autoComplete="off" name='town' 
                onChange={(e)=>handleChanges(e)}>
                <option value="">Your Town</option>
                    {
                        towns?.map((town,i)=><option className='option' key={i} value={town.town}>{town.town}</option>)
                    }
            </select>
      </div>
      <div className='input-div'>
          <textarea className='input-textarea' autoComplete="off" type="text" name='message' cols="30" rows="5"
          value={contact.message} 
          onChange={(e)=>handleChanges(e)} placeholder='Message'></textarea>
      </div>
      <div className='input-div'>
          <input type="submit" className='submit contact'/>
      </div>
  </form>)
}

export default Contact