import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

  const  location= useLocation()
 const{user,loading} = useContext(AuthContext)
    
if(loading){
    return <h1>Loading.....</h1>
}

if(user){
    return children 
}

else return <Navigate to="./login" state={{from: location }} replace></Navigate>
    
};

export default PrivateRoute;