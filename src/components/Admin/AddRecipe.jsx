import React,{useState,useEffect} from 'react'

function AddRecipe() {
const [recipe,setRecipe]=useState({
  name:'',
  imgURL:'',
  price:'',
  from:'',
  delivery:false,
  status:false,
  des:''
})
const [warning,setWarning]=useState('');

const handleChanges=(e)=>{
  if(e.target.checked){
    setRecipe({...recipe,[e.target.name]:e.target.checked})
    return;
  }
  setRecipe({...recipe,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
  e.preventDefault()
  for(const key in recipe){
    if(recipe[key]===''){
      setWarning(`${key} is empty`)
    }
  }
}

useEffect(()=>{
  const timer = setTimeout(()=>{
      setWarning('')
  },4000)
  return ()=>clearTimeout(timer)
},[recipe])

  return (<>
    <form onSubmit={(e)=>handleSubmit(e)} className=''>
      <div className='input-div'>
        <h1 className='section-header'>Add Recipe</h1>
      </div>
      <div>
        {warning&&<p className='warning'>{warning}</p>}
      </div>
      <div className='input-div'>
        <input type="text" className='input' name='name' id='name' placeholder='Name' value={recipe.name} onChange={(e)=>handleChanges(e)}/>
      </div>
      <div className='input-div'>
        <input type="text"  className='input' name='imgURL' id='imgURL' placeholder='image url' onChange={(e)=>handleChanges(e)} value={recipe.imgURL}/>
      </div>
      <div className='input-div'>
        <input type="number" placeholder='Price' name='price' className='input' id='price' onChange={(e)=>handleChanges(e)} value={recipe.price}/>
      </div>
      <div className='input-div'>
        <select name="from" className='input' onChange={(e)=>handleChanges(e)} id="country">
          {/* fetch api and add option  */}
          <option value="sd">sdfs</option>
          <option value="sdsdfa">sdfs</option>
        </select>
      </div>
      <div className='input-div'>
        <label htmlFor="delivery" className='add-recipe-label'>Delivery</label>
        <input type="checkbox" className='add-recipe-checkbox'  name='delivery' id='delivery' onChange={(e)=>handleChanges(e)}/>
      </div>
      <div className='input-div'>
        <label htmlFor="status" className='add-recipe-label'>Status</label>
        <input type="checkbox"  className='add-recipe-checkbox' name='status' id='status' onChange={(e)=>handleChanges(e)} />
      </div>
      <div className='input-div'>
        <textarea  className='input-textarea' name="des" id="des" placeholder='Description' cols="30" rows="6" onChange={(e)=>handleChanges(e)} value={recipe.des}></textarea>
      </div>
      <div className='input-div'>
        <button type='submit' className='submit'>Add</button>
      </div>
    </form>
  </>)
}

export default AddRecipe