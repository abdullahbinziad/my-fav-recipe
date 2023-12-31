import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import logo from '../assets/imgs/logo.png'


const Header = () => {

 
const {user,logout,} = useContext(AuthContext)

console.log(user);
const menu =
<>

<li> <ActiveLink to="/">Home</ActiveLink> </li>
<li> <ActiveLink to="/about">About</ActiveLink> </li>
<li> <ActiveLink to="/blogs">Blog</ActiveLink> </li>
<li> <ActiveLink to="/chef">Chefs</ActiveLink> </li>

</>

    return (
        <div className="w-100 shadow-md  bg-base-100">
          <nav className="md:w-3/4 mx-auto  ">
          <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {
        menu
       }
      </ul>
    </div>
<Link to='/'><img  className=" w-24  " src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
menu
      }
    </ul>
  </div>
  <div className="navbar-end">
  
  {
    user 
    ? <>
    <div className="tooltip tooltip-left" data-tip={user.displayName}>
       <img className="w-8 rounded-full" src={user.photoURL} alt="" />
        </div>
        <Link onClick={logout} className="btn btn-xs mx-2" >Logout</Link>
    </>
  : <Link className="btn btn-sm" to='/login'>Login</Link>

  }
   
  </div>
</div>
          </nav>
        </div>
    );
};

export default Header;