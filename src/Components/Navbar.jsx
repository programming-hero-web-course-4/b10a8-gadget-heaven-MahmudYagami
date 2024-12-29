import { Link, NavLink, useLocation } from "react-router-dom";
import logout from "../assets/power-off.png";

const Navbar = () => {
  const location = useLocation();
  const navbarBgColor =
    location.pathname === "/" ? "bg-[#9538E2] text-white" : "bg-base-100";

  return (
    <>
      <div className={`navbar ${navbarBgColor} mt-6`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg bg-black text-white px-3 py-1 rounded"
                    : "text-lg"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg bg-black text-white px-3 py-1 rounded"
                    : "text-lg"
                }
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg bg-black text-white px-3 py-1 rounded"
                    : "text-lg"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg bg-black text-white px-3 py-1 rounded"
                    : "text-lg"
                }
                to="/faq"
              >
                FAQ
              </NavLink>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl">
            GadgetHeaven
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-lg bg-black text-white px-3 py-1 rounded"
                  : "text-lg"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-lg bg-black text-white px-3 py-1 rounded"
                  : "text-lg"
              }
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-lg bg-black text-white px-3 py-1 rounded"
                  : "text-lg"
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-lg bg-black text-white px-3 py-1 rounded"
                  : "text-lg"
              }
              to="/faq"
            >
              FAQ
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <Link to={"/dashboard"}>
            <img
              width="40"
              height="40"
              className="bg-white p-2 rounded-full"
              src="https://img.icons8.com/ios/50/shopping-cart--v1.png"
              alt="shopping-cart--v1"
            />
          </Link>
          <Link to={"/dashboard"}>
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/material-outlined/24/like--v1.png"
              alt="like--v1"
              className="bg-white p-2 rounded-full"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
