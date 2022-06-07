import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import HomeNav from '../components/HomeNav'
import * as users from '../redux/actions/userActions'
import User from './User';

function Account() {
const locations = useSelector(state=>state.location.locations)
const [register,setRegister]=useState({
    name:'',
    email:'',
    password:'',
    cPassword:'',
    tel:'',
    location:'no location'
});

const [login,setLogin]=useState({
    login:true,
    email:'',
    password:''
});

const [showRegister,setShowRegister]=useState(true);
const [warning,setWarning]=useState('');
const [success,setSuccess]=useState('');
const [navigateToUser,setNavigateToUser]=useState(null)

const handleRegister=(e)=>{
    e.preventDefault();
    localStorage.setItem('cart',JSON.stringify([]))
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
      users.register(register)
        .then(data => {
            if(data.status!==200){
                setWarning(data.message)
            }else{
                setShowRegister(true)
            }
        })
}

const handleLogin = (e)=>{
    e.preventDefault();

    users.login(login).then(data=>{
        if(data.status===200){
            localStorage.setItem('token',JSON.stringify(data.data));
            users.loginAuth();
            setNavigateToUser(true);
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

  return (<>{navigateToUser?<User/>:<>
  <HomeNav/>
  <section className='main'>
    {showRegister&&
        <form className='form' onSubmit={(e)=>handleLogin(e)}>
            <div className='input-div'><h3 className='section-header'>Login</h3></div>

            <div>{warning&&<p className='warning'>{warning}</p>}</div>
            <div>{success&&<p className='success'>{success}</p>}</div>
            <div className='input-div'>
                <input className='input' autoComplete="off" type="email" name='email' 
                value={login.email} 
                onChange={(e)=>handleChanges(e)} placeholder='Email' id='login-email' required/>
            </div> 
            <div className='input-div'>
                <input className='input' autoComplete="off" type="password" name='password' 
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
                <input className='input' autoComplete="off" type="text" name='name' 
                value={register.name} 
                onChange={(e)=>handleChanges(e)} placeholder='Name'/>
            </div>
            <div className='input-div'>
                <input className='input' autoComplete="off" type="email" name='email' 
                value={register.email} 
                onChange={(e)=>handleChanges(e)} placeholder='Email'/>
            </div> 
            <div className='input-div'>
                <input className='input' autoComplete="off" type="password" name='password' 
                value={register.password} 
                onChange={(e)=>handleChanges(e)} placeholder='Password'/>
            </div>
            <div className='input-div'>
                <input className='input' autoComplete="off" type="password" name='cPassword' 
                value={register.cPassword} 
                onChange={(e)=>handleChanges(e)} placeholder='Confirm password'/>
            </div>
            <div className='input-div'>
                <input className='input' autoComplete="off" type="text" name='tel' 
                value={register.tel} 
                onChange={(e)=>handleChanges(e)} placeholder='Phone'/>
            </div>
            <div className='input-div'>
                <select className='input' autoComplete="off" name='location' 
                onChange={(e)=>handleChanges(e)}>
                    <option value="" >Select Location</option>
                    {
                     locations?.map(location=><option className='option' key={location.locationID} value={location.town}>{location.town}</option>)
                    }
                </select>
            </div>
            <div className='input-div'>
            <button type='submit' className='submit account'>Register</button>
            <button className='swap' onClick={()=>setShowRegister(true)}>Login</button>
            </div>    
        </form>}
  </section>
  </>}</>)
}

var numberPattern = new RegExp("^((62)|(67)|(66)|(65))[0-9]{7}$");
var passwordPattern = new RegExp('^[0-9A-Za-z]{8,}$');

export default Account