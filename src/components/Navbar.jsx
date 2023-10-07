import { NavLink } from "react-router-dom";


const Navbar = () => {

   

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink
             to="/"
             className={({isActive, isPending})=>
                isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg" : ""
                }
           >
            <li><a>Home</a></li></NavLink>
            <li tabIndex={0}>
              <details>
                <summary>Category</summary>
                <ul className="p-2">
                 <NavLink
                 to='/camera'
                 className={({isActive, isPending})=>
                  isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg block" : ""
                  }
                 > <li><a>Camera</a></li></NavLink>
                 <NavLink
                 to="/computer"
                  className={({isActive, isPending})=>
                  isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg block" : ""
                  }
                 > <li><a>Computer</a></li></NavLink>
                 <NavLink
                 to="/tv"
                  className={({isActive, isPending})=>
                  isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg block" : ""
                  }
                 > <li><a>TV</a></li></NavLink>
                 <NavLink
                 to="/gadget"
                  className={({isActive, isPending})=>
                  isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg block" : ""
                  }
                 > <li><a>Gadget</a></li></NavLink>
               
                </ul>
              </details>
            </li>
            <NavLink
            to="/about"
             className={({isActive, isPending})=>
             isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg" : ""
             }
            > <li><a>About</a></li></NavLink>
            <NavLink
            to="/login"
             className={({isActive, isPending})=>
             isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg" : ""
             }
            > <li><a>Login</a></li></NavLink>
           
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <NavLink
             to="/"
             className={({isActive, isPending})=>
                isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg" : ""
                }
           >
            <li><a>Home</a></li></NavLink>
            <li tabIndex={0}>
              <details>
                <summary>Category</summary>
                <ul className="p-2">
                 <NavLink
                 to='/camera'
                 className={({isActive, isPending})=>
                isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg block" : ""
                }
                 > <li><a>Camera</a></li></NavLink>
                 <NavLink
                 to="/computer"
                  className={({isActive, isPending})=>
                  isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg block" : ""
                  }
                 > <li><a>Computer</a></li></NavLink>
                 <NavLink
                 to="/tv"
                  className={({isActive, isPending})=>
                  isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg block" : ""
                  }
                 > <li><a>TV</a></li></NavLink>
                 <NavLink
                 to="/gadget"
                  className={({isActive, isPending})=>
                  isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg block" : ""
                  }
                 > <li><a>Gadget</a></li></NavLink>
               
                </ul>
              </details>
            </li>
            <NavLink
            to="/about"
             className={({isActive, isPending})=>
             isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg" : ""
             }
            > <li><a>About</a></li></NavLink>
            <NavLink
            to="/login"
             className={({isActive, isPending})=>
             isPending ? "pending" : isActive ? "text-white bg-purple-500 rounded-lg" : ""
             }
            > <li><a>Login</a></li></NavLink>
           
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;