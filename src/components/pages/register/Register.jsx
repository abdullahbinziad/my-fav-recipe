import { Link } from "react-router-dom";

import signUpImg from "../../../assets/imgs/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../authprovider/AuthProvider";

const Register = () => {
  //read the auth context
  const { register,userProfile } = useContext(AuthContext);
  const [message,setMessage] = useState(<p></p>)

  //   handle on submit
  const loginOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;


    register(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        userProfile(name,photoUrl)
        .then(() => {
            setMessage( <p className="text-blue-700 font-semibold">`{user.displayName} ,Your account has Successfully Created`</p>)
          }).catch(() => {
          
          });
      })
      .catch((error) => {
       
        setMessage(<p className="text-red-700 font-semibold">Something Went Wrong ! {error.message}</p>)
        // ..
      });

      form.reset();
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                 id="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
                  name="password"
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
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
                  required
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
           {message}
           <br />
              <span  className="label-text  ">Have already an Account?</span>
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
