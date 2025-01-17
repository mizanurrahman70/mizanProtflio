import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <a
          href="#home"
          className="hover:text-white hover:bg-secondary cursor-pointer"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="hover:text-white hover:bg-secondary cursor-pointer"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="hover:text-white hover:bg-secondary cursor-pointer"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className="hover:text-white hover:bg-secondary cursor-pointer"
        >
          Experience
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="hover:text-white hover:bg-secondary cursor-pointer"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#education"
          className="hover:text-white hover:bg-secondary cursor-pointer"
        >
          Education
        </a>
      </li>
      <li>
        <a
          href="#blog"
          className="hover:text-white hover:bg-secondary cursor-pointer"
        >
          Blog
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="hover:text-white hover:bg-secondary cursor-pointer"
        >
          Contact
        </a>
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
            <a className="text-primary lg:text-2xl font-bold">Mizanur Rahman</a>
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
