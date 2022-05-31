import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import {TiArrowBack} from 'react-icons/ti'
import '../../css_components/form.scss'
import '../../css_pages/checkout.scss'
import * as actions from '../../redux/actions/locationActions'

function AddLocation() {
const [warning,setWarning]=useState('');
const [success,setSuccess]=useState('');
const [showLocation,setShowLocation]=useState(false);
const [location,setLocation]=useState({
  region:'',
  town:''
})
const locations = useSelector(state=>state.location);
console.log(locations);

const handleChanges=e=>{
  setLocation({...location,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{
  e.preventDefault()

  for(const key in location){
    if(location[key]===''){
      setWarning(`${key} is empty`)
      return;
    }
  }
}

useEffect(()=>{
  const timer = setTimeout(()=>{
    setWarning('')
    setSuccess('')
  },4000)
  return ()=>clearTimeout(timer)
})

const handleRemoveLocation = async(id)=>{
  actions.removeFromLocation(id)
}
return (
  <>{!showLocation&&<form onSubmit={(e)=>handleSubmit(e)} className='form'>
  <div className='input-div'>
    <h3>Add Location</h3>
  </div>
  <div>{warning&&<p className='warning'>{warning}</p>}</div>
  <div>{success&&<p className='success'>{success}</p>}</div>
  <div className='input-div'>
    <input type="text" className='input' name='region' id='region' placeholder='Region' value={location.region} onChange={(e)=>handleChanges(e)}/>
  </div>
  <div className='input-div'>
    <input type="text" className='input' name='town' id='town' placeholder='Town' value={location.town} onChange={(e)=>handleChanges(e)}/>
  </div>
  <div className='input-div'>
    <button type='submit' className='submit account'>Add Location</button>
    <button className='swap' onClick={()=>setShowLocation(true)}>Show Locations</button>
  </div>
  </form>}
  {showLocation&&<div className='checkout-table'>
  <h3>Locations</h3>
    <TiArrowBack onClick={()=>setShowLocation(false)} className='back-btn'/>
    <div>{warning&&<p className='warning'>{warning}</p>}</div>
    <div>{success&&<p className='success'>{success}</p>}</div>
    <div className='checkout-table-header'>
      <h4 className='table-header'>#</h4>
      <h4 className='table-header'>Region</h4>
      <h4 className='table-header'>Town</h4>
      <h4 className='table-header'>action</h4>
    </div>
    {
      locations?.map((location,i)=>(
      <div className='checkout-table-body'>
        <h5 className='table-data'>{i+1}</h5>
        <h5 className='table-data'>{location.region}</h5>
        <h5 className='table-data'>{location.town}</h5>
        <h5 className='table-data'><button className='remove' onClick={()=>handleRemoveLocation(location.locationID)}>remove</button></h5>
      </div> 
      ))
    }
  </div>}
  </>)
}

export default AddLocation