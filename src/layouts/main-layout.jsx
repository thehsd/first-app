import { Link, NavLink, Outlet } from "react-router";
import { useState } from "react";
import AuthContext from "../context/auth-context.jsx";

const MainLayout = () => {
  const [auth, setAuth] = useState(false);
  const user = {
    firstName: "Alireza",
    lastName: "Hosseini",
    userName: "alireza",
  };

  function login() {
    setAuth(true);
  }
  function logout() {
    setAuth(false);
  }

  return (
    <>
      <AuthContext.Provider value={{ auth, user, login, logout }}>
        <header className="bg-gray-100 p-4 mb-3">
          <nav className="flex justify-between">
            {/* navigation items can go here */}
            <ul className="flex flex-row gap-2">
              <li className="">
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "bg-sky-100 rounded-sm p-1"
                      : isActive
                        ? "bg-sky-200 rounded-sm p-1"
                        : "bg-sky-50 rounded-sm p-1"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/posts"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "bg-sky-100 rounded-sm p-1"
                      : isActive
                        ? "bg-sky-200 rounded-sm p-1"
                        : "bg-sky-50 rounded-sm p-1"
                  }
                >
                  Posts
                </NavLink>
              </li>
            </ul>

            {/* user info */}
            {auth ? (
              <>
                <p>{user.userName}</p>
              </>
            ) : (
              <button onClick={login}>Login</button>
            )}
          </nav>
        </header>
        <div>
          <Outlet />
        </div>
      </AuthContext.Provider>
    </>
  );
};

export default MainLayout;
