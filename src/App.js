import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home'
import Account from './pages/Account'
import User from './pages/User'
import Checkout from './pages/Checkout';
import Chat from './pages/Chat';
import Admin from './pages/Admin';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import * as user from './redux/actions/userActions';
import * as area from './redux/actions/locationActions'
import * as recipe from './redux/actions/recipeActions';
import { useSelector } from 'react-redux';

function App() {
const locations = useSelector(state=>state.location.locations);

useEffect(()=>{
  user.authenticateUser();
  area.getLocations();
  recipe.getRecipes();
},[])

useEffect(()=>{
  area.getRegions(locations);
},[locations])

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/> 
        <Route exact path='/login' element={<Account/>}/>
        <Route exact path='/user' element={<User/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route exact path='/chat' element={<Chat/>}/>
          <Route exact path='/cart' element={<Checkout/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;