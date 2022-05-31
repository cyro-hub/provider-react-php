import { useSelector } from 'react-redux'; 
import {Outlet,Navigate} from 'react-router-dom';

function ProtectedRoute(){
const auth = useSelector(state=>state.user.auth)

return <>{auth?<Outlet/>:<Navigate to='/login' replace={true}/>}</>
}


export default ProtectedRoute