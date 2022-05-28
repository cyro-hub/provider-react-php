// import {useSelector} from 'react-redux';
import {Outlet,Navigate} from 'react-router-dom';

function ProtectedRoute(){
// const authStatus = useSelector(state=>state);
// console.log(authStatus);

return <>{true?<Outlet/>:<Navigate to='/login' replace={true}/>}</>
}


export default ProtectedRoute