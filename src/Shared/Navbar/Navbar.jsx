import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#12B788", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#12B788", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#12B788", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          Skills
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/projects"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#12B788", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/education"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#12B788", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#12B788", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#12B788", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
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
              {navLink}
            </ul>
          </div>
          <Link to="/">
            <a className="text-primary font-bold">Naiem Hasan</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
