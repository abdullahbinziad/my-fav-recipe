import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";


const PrivateRoute = ({children}) => {

  const  location= useLocation()
 const{user,loading} = useContext(AuthContext)
    
if(loading){
    return <HashLoader className="my-32 mx-auto w-3/4" color="#36d7b7" />
}

if(user){
    return children 
}

else return <Navigate to="./login" state={{from: location }} replace></Navigate>
    
};

export default PrivateRoute;