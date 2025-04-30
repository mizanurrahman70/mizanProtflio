import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const navLinks = navItems.map(({ id, label }) => (
    <li key={id}>
      <a
        href={`#${id}`}
        className="px-4 py-2 rounded-md text-lg font-medium transition-all duration-200 hover:text-white hover:bg-secondary"
      >
        {label}
      </a>
    </li>
  ));

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        {/* Mobile Menu Button */}
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-primary text-xl lg:text-2xl font-bold ml-2">
            Mizanur Rahman
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
