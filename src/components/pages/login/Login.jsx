import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import loginImg from "../../../assets/imgs/login.svg";
import { useContext, useState,  } from "react";
import { AuthContext } from "../../../authprovider/AuthProvider";

const Login = () => {

const nevigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || '/' ;

const {loginByEmailPassword,signinWithGoogle,signinWithGithub}= useContext(AuthContext) ;

const [message,setMessage] = useState("")

  const loginOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginByEmailPassword(email,password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        nevigate(from,{replace:true})
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setMessage(errorMessage)
        
      });
    
      form.reset();

}

    return (
      <div className="hero mt-10">
        <div className="hero-content flex-col lg:flex-row gap-28 ">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginOnSubmit} className="px-8 pt-8">
              <h1 className="text-5xl text-center font-bold">Login Now!</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="login"
                />
              </div>
             
            {
                message &&   <span className="text-red-700 my-3">{message.split("Firebase: Error (auth/")}</span>
            }
        
             </form>
<div className="my-1">
<div className="divider">OR</div>
<div className="flex gap-4 justify-center">
    <button onClick={()=>{
        signinWithGoogle()
        .then(()=>{
            nevigate(from,{replace:true})
        })
        }} className="btn btn-outline flex gap-3 items-center">Login With <FcGoogle/> </button>
    <button onClick={()=>{
        signinWithGithub()
        .then(()=>{
            nevigate(from,{replace:true})
        })
        }} className="btn btn-outline flex gap-3 items-center">Login With  <FaGithub/> </button>
</div>
<div className="px-6 m-6 text-center">
    
    <span className="label-text">Have any Account?</span>
                <Link to="/register" className=" text-blue-400 ">
                  SignUp
                </Link>
    </div>
</div>


           
            

          </div>
        </div>
      </div>
    );
  };


export default Login;
