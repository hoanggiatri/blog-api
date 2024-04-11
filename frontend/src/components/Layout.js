import { Outlet, Link, useNavigate } from "react-router-dom";
import '../css/Layout.css'
import { useState } from "react";
function AppLayout({ children }) {

  const [user, setUser] = useState();
  const navigate = useNavigate();

  function logOut() {
    setUser(null);
    navigate("/");
  }
  return (
    <>
      <nav>
        <ul className="navigation-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>|</li>
          <li>
          {user ? (
          <>
            <Link to="/stats">Stats</Link>
            <span onClick={logOut}>Logout</span>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        </li>
        </ul>
      </nav>
      {children}
      <Outlet />
    </>
  )
};

export default AppLayout