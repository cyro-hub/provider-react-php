import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home'
import Account from './pages/Account'
import User from './pages/User'
import Checkout from './pages/Checkout';
import Chat from './pages/Chat';
import Admin from './pages/Admin';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import * as actions from './redux/actions/userActions';

function App() {

useEffect(()=>{
  actions.authenticateUser()
},[])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/login' element={<Account/>}/>
        <Route path='/user' element={<User/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/cart' element={<Checkout/>}/>
        </Route>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;