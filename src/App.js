import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Account from './pages/Account'
import User from './pages/User'
import Checkout from './pages/Checkout';
import Chat from './pages/Chat';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/login' element={<Account/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;