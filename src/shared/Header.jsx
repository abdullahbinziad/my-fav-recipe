import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { Link } from "react-router-dom";



const Header = () => {
 
const {user} = useContext(AuthContext)

console.log(user);
const menu =
<>

<li> <a href="">Home</a> </li>
<li> <a href="">About</a> </li>
<li> <a href="">Blog</a> </li>

</>

    return (
        <div className="w-100 shadow-sm">
          <nav className="w-3/4 mx-auto">
          <div className="navbar bg-base-100">
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
    <a className="btn btn-ghost normal-case text-xl">MyFavRecipe</a>
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
    ? <div className="tooltip tooltip-left" data-tip={user.displayName}>
       <img className="w-8 rounded-full" src={user.photoURL} alt="" />
        </div>
  : <Link className="btn btn-sm" to='/login'>Login</Link>

  }
   
  </div>
</div>
          </nav>
        </div>
    );
};

export default Header;