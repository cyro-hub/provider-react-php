import React,{useState,useEffect} from 'react'
import HomeNav from '../components/HomeNav'

function Account() {
const [register,setRegister]=useState({
    name:'',
    email:'',
    password:'',
    cPassword:'',
    tel:'',
    location:''
});

const [login,setLogin]=useState({
    email:'',
    password:''
});

const [showRegister,setShowRegister]=useState(true);
const [locations,setLocations]=useState([]);
const [warning,setWarning]=useState('');
const [success,setSuccess]=useState('');

const handleRegister=async(e)=>{
    e.preventDefault();

    if(!register.password.match(passwordPattern)){
        setWarning('Password must contain atleast 8 letter or numbers')
        return;
    }
    if(!register.tel.match(numberPattern)){
        setWarning('Phone number is incorrect')
        return;
    }
    for(const key in register){
        if(register[key]===''){
          setWarning(`${key} is empty`)
        }
      }

    await fetch('http://localhost:4500/rest/views/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(register),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status===200){
                setSuccess(data.message)
                const setTimer = setTimeout(()=>{
                    window.location.href='/login'
                },1000)
            }else{
                setWarning(data.message)
            }
        })
     
}

const handleLogin=async(e)=>{
    e.preventDefault();

    await fetch(`http://localhost:4500/rest/views/login.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status===200){
                setSuccess(data.message)
                localStorage.setItem('token',JSON.stringify(data.data));
                const setTimer = setTimeout(()=>{
                    window.location.href='/user'
                },1000)
            }else{
                setWarning(data.message)
            }
        })
}


const handleChanges=(e)=>{
    if(e.target.id==='login-email'||e.target.id==='login-password'){
        setLogin({...login,[e.target.name]:e.target.value})
        return;
    }
    setRegister({...register,[e.target.name]:e.target.value})
    
}

useEffect(()=>{
    const timer = setTimeout(()=>{
        setWarning('')
        setSuccess('')
    },4000)
    return ()=>clearTimeout(timer)
})

useEffect(()=>{
    const getLocations = async()=>{
        await fetch(`http://localhost:4500/rest/views/location.php`).then(res=>res.json()).then(data=>{
            if(data.status===200){
                setLocations(data.data);
            }else{
                setWarning(data.message)
            }
        })
    }
    getLocations();
},[])

  return (<>
  <HomeNav/>
  <section className='main'>
    {showRegister&&
        <form className='form' onSubmit={(e)=>handleLogin(e)}>
            <div className='input-div'><h3 className='section-header'>Login</h3></div>

            <div>{warning&&<p className='warning'>{warning}</p>}</div>
            <div>{success&&<p className='success'>{success}</p>}</div>
            <div className='input-div'>
                <input className='input' type="email" name='email' 
                value={login.email} 
                onChange={(e)=>handleChanges(e)} placeholder='Email' id='login-email' required/>
            </div> 
            <div className='input-div'>
                <input className='input' type="password" name='password' 
                value={login.password} 
                onChange={(e)=>handleChanges(e)} placeholder='Password' id='login-password' required/>
            </div>

            <div className='input-div'>
            <button type='submit' className='submit account'>Login</button>
            <button className='swap' onClick={()=>setShowRegister(false)}>Register</button>
            </div>
        </form>}
    {!showRegister&&<form className='form' onSubmit={(e)=>handleRegister(e)}>
            <div className='input-div'><h3 className='section-header'>Register</h3></div>
            <div>{warning&&<p className='warning'>{warning}</p>}</div>
            <div className='input-div'>
                <input className='input' type="text" name='name' 
                value={register.name} 
                onChange={(e)=>handleChanges(e)} placeholder='Name'/>
            </div>
            <div className='input-div'>
                <input className='input' type="email" name='email' 
                value={register.email} 
                onChange={(e)=>handleChanges(e)} placeholder='Email'/>
            </div> 
            <div className='input-div'>
                <input className='input' type="password" name='password' 
                value={register.password} 
                onChange={(e)=>handleChanges(e)} placeholder='Password'/>
            </div>
            <div className='input-div'>
                <input className='input' type="password" name='cPassword' 
                value={register.cPassword} 
                onChange={(e)=>handleChanges(e)} placeholder='Confirm password'/>
            </div>
            <div className='input-div'>
                <input className='input' type="text" name='tel' 
                value={register.tel} 
                onChange={(e)=>handleChanges(e)} placeholder='Phone'/>
            </div>
            <div className='input-div'>
                <select className='input' name='location' 
                onChange={(e)=>handleChanges(e)}>
                    <option>select location</option>
                    {
                     locations.map(location=><option key={location.locationID} value={location.town} className=''>{location.town}</option>)
                    }
                </select>
            </div>
            <div className='input-div'>
            <button type='submit' className='submit account'>Register</button>
            <button className='swap' onClick={()=>setShowRegister(true)}>Login</button>
            </div>    
        </form>}
  </section>
  </>)
}

var numberPattern = new RegExp("^((62)|(67)|(66)|(65))[0-9]{7}$");
var passwordPattern = new RegExp('^[0-9A-Za-z]{8,}$');

export default Account