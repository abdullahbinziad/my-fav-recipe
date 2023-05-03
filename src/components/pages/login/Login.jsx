import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import loginImg from "../../../assets/imgs/login.svg";

const Login = () => {


  const loginOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
}

    return (
      <div className="hero mt-10">
        <div className="hero-content flex-col lg:flex-row gap-28 ">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginOnSubmit} className="p-8">
              <h1 className="text-5xl font-bold">Login Now!</h1>

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
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="login"
                />
              </div>
<div className="my-3">
<div className="divider">OR</div>
<div className="flex gap-4 justify-center">
    <button className="btn btn-outline flex gap-3 items-center">Login With <FcGoogle/> </button>
    <button className="btn btn-outline flex gap-3 items-center">Login With  <FaGithub/> </button>
</div>
</div>


              <div className="my-3">
    
<span className="label-text">Have any Account?</span>
            <Link to="/register" className="py-5 text-blue-400 ">
              SignUp
            </Link>
</div>
            </form>

          </div>
        </div>
      </div>
    );
  };


export default Login;
