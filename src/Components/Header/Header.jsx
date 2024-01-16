import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
 
  const handleSignOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }



  return (
    <nav className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {/* Logo Section */}
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2"
          title="Go to Home"
        >

          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            Authentication
          </span>
        </Link>

        {/* Nav Item Section */}
        <div>
          <ul className="items-center space-x-8 flex md:flex font-semibold">
            <li>
              <Link to="/" title="Home Page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/order" title="Register">
                Order
              </Link>
            </li>
             {user && <li>
              <Link to="/profile" title="Register">
                Profile
              </Link>
            </li>  }                 
            <li>
              <Link to="/register" title="Register">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" title="Login Page">
                LogIn
              </Link>
            </li>
            <li>
            {
            user ? <>
              <span>{user.email}</span>
              <button onClick={handleSignOut}>..SignOut</button>
            </> : <Link to="/login" title="Login Page">
                LogIn
              </Link>
          }
            </li>
          </ul>

          

        </div>
      </div>
    </nav>
  );
};

export default Header;