
import { Link } from "react-router-dom";

import signUpImg from "../../../assets/imgs/login.svg";

const Register = () => {
   //read the auth context  

//   handle on submit 
  const loginOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

  };

  return (
    <div className="hero mt-4">
      <div className="hero-content  flex-col lg:flex-row  ">
        <div className="text-center   lg:text-left">
          <img className="w-5/6" src={signUpImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-2/3  shadow-2xl bg-base-100">
          <form name="register-form" onSubmit={loginOnSubmit} className="p-12">
            <h1 className="text-4xl font-bold text-center">Sign UP Now!</h1>
           <div className="grid grid-cols-2 gap-3">
           <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name="photoUrl"
                type="text"
                placeholder="Photo Url"
                className="input input-bordered"
              />
            </div>
          
           </div>
           <div className="form-control mt-6 w-100">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Register Now"
              />
            </div>
            <div className="mt-4">
         <span className="label-text">Have already an Account?</span>
          <Link to="/login" className=" text-blue-500 ">
            Login
          </Link>
         </div>
          </form>

        
        </div>
      </div>
    </div>
  );
};

export default Register;
