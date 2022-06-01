import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import {TiArrowBack} from 'react-icons/ti'
import '../../css_components/form.scss'
import '../../css_pages/checkout.scss'
import * as actions from '../../redux/actions/locationActions'

function AddLocation() {
const [warning,setWarning]=useState('');
const [showLocation,setShowLocation]=useState(false);
const [location,setLocation]=useState({
  region:'',
  town:''
})
const locations = useSelector(state=>state.location.locations);
const success = useSelector(state=>state.location.success)

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

  actions.addLocation(location)
  setShowLocation(true);
  setLocation({
    region:'',
    town:''
  })
}

useEffect(()=>{
  const timer = setTimeout(()=>{
    setWarning('')
    actions.removeSuccess()
  },4000)
  return ()=>clearTimeout(timer)
})

// handling the removal of locations
const handleRemoveLocation = async(id)=>{
  actions.removeFromLocation(id)
}

return (
  <>{!showLocation&&<form onSubmit={(e)=>handleSubmit(e)} className='form'>
  <div className='input-div'>
    <h3>Add Location</h3>
  </div>
  <div>{warning&&<p className='warning'>{warning}</p>}</div>
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
  {showLocation&&<>
  <TiArrowBack onClick={()=>setShowLocation(false)} className='back-btn'/>
  <section className='main'>
  <h3>Locations</h3>
  <div>{success&&<p className='success'>{success}</p>}</div>
  <table>
      <thead>
        <tr>
          <th>Region</th>
          <th>Town</th>
          <th className='action'>action</th>
        </tr>
      </thead>
      <tbody>
        {
          locations?.map(location=><tr key={location.locationID}>
            <td>{location.region}</td>
            <td>{location.town}</td>
            <td className='action'>
              <button onClick={()=>handleRemoveLocation(location.locationID)} className='btn_remove'>remove</button>
            </td>
          </tr>)
        }
      </tbody>
    </table></section></>}
  </>)
}

export default AddLocation