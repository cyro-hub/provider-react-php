import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import '../../css_components/form.scss'

function AddRecipe() {
// const locations = useSelector(state=>state.location.locations)
const locations = []

const [recipe,setRecipe]=useState({
  name:'',
  image:'',
  price:'',
  from:locations?.region||'Location unavailable',
  delivery:false,
  status:false,
  des:''
})
const [warning,setWarning]=useState('');
const [success,setSuccess]=useState('');
const [imageSelected,setImageSelected]=useState(false);

const handleChanges=(e)=>{
  if(e.target.checked){
    setRecipe({...recipe,[e.target.name]:e.target.checked})
    return;
  }
  if(e.target.name === 'image'){
    if(e.target.value.match(/\.(jpg|jpeg|png|gif)$/)) {
      setImageSelected(true);
      setRecipe({...recipe,[e.target.name]:e.target.files[0]})
      return;
    }else{
      setWarning('Please select valid image (jpg,jpeg,png,gif)')
      return;
    }
  }
  setRecipe({...recipe,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{
  e.preventDefault()
  for(const key in recipe){
    if(recipe[key]===''){
      setWarning(`${key} is empty`)
      return;
    }
  }
// console.log(URL.createObjectURL(recipe.image))
  // await fetch(`${process.env.REACT_APP_API}/recipe.php`, {
  //   method: 'POST',
  //   headers: {
  //       'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(recipe),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   }).catch(err=>{
  //     console.error(err.message)
  //   })
}

useEffect(()=>{
  const timer = setTimeout(()=>{
      setWarning('')
      setSuccess('')
  },4000)
  return ()=>clearTimeout(timer)
})

  return (<>
    <form onSubmit={(e)=>handleSubmit(e)} className='form'>
      <div className='input-div'>
        <h3>Add Recipe</h3>
      </div>
      <div>
        {warning&&<p className='warning'>{warning}</p>}
      </div>
      <div>{success&&<p className='success'>{success}</p>}</div>
      <div className='input-div'>
        <input type="text" className='input' name='name' id='name' placeholder='Name' value={recipe.name} onChange={(e)=>handleChanges(e)}/>
      </div>
      <div className='input-div'>
        <label htmlFor="image" className='submit contact'>
          {imageSelected?<img className='selected-image' src={URL.createObjectURL(recipe.image)} alt='selected img'/>:'Select an Image'}
          <input type="file"  className='input' name='image' id='image' onChange={(e)=>handleChanges(e)} style={{display:'none'}} />
        </label>
      </div>
      <div className='input-div'>
        <input type="number" placeholder='Price' name='price' className='input' id='price' onChange={(e)=>handleChanges(e)} value={recipe.price}/>
      </div>
      <div className='input-div'>
        <select name="from" className='input' onChange={(e)=>handleChanges(e)} id="country">
        {
          locations?.map(location=><option className='option' key={location.locationID} value={location.town}>{location.town}</option>)
        }
        </select>
      </div>
      <div className='input-div check'>
        <label htmlFor="delivery" className='add-recipe-label'>Delivery</label>
        <input type="checkbox" className='add-recipe-checkbox'  name='delivery' id='delivery' onChange={(e)=>handleChanges(e)}/>
      </div>
      <div className='input-div check'>
        <label htmlFor="status" className='add-recipe-label'>Status</label>
        <input type="checkbox"  className='add-recipe-checkbox' name='status' id='status' onChange={(e)=>handleChanges(e)} />
      </div>
      <div className='input-div'>
        <textarea  className='input-textarea' name="des" id="des" placeholder='Description' cols="30" rows="6" onChange={(e)=>handleChanges(e)} value={recipe.des}></textarea>
      </div>
      <div className='input-div'>
        <button type='submit' className='submit contact'>Add Recipe</button>
      </div>
    </form>
  </>)
}

export default AddRecipe