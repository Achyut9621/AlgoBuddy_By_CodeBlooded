import { NavLink, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const linkClasses = ({ isActive }) =>
    `hover:text-green-400 transition ${
      isActive ? "text-green-400 font-semibold underline" : ""
    }`;

  return (
    <div className="relative">
      {/* Navbar Section */}
      <nav className="bg-black text-electricBlue px-6 py-4 flex flex-wrap justify-start items-center shadow-lg">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-electricBlue hover:text-green-400 mr-8"
        >
          AlgoBuddy
        </NavLink>

        {/* Links */}
        <div className="space-x-6 text-lg flex flex-wrap">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/topics" className={linkClasses}>Topics</NavLink>
          <NavLink to="/array" className={linkClasses}>Array</NavLink>
          <NavLink to="/linkedlist" className={linkClasses}>Linked List</NavLink>
          <NavLink to="/stack" className={linkClasses}>Stack</NavLink>
          <NavLink to="/trees" className={linkClasses}>Tree</NavLink>
          <NavLink to="/searching" className={linkClasses}>Searching</NavLink>
          <NavLink to="/patterns" className={linkClasses}>Patterns</NavLink>
          <NavLink to="/roadmap" className={linkClasses}>Roadmap</NavLink>
          <NavLink to="/EasyDSA" className={linkClasses}>EasyDSA</NavLink>
          <NavLink to="/Recursion" className={linkClasses}>Recursion</NavLink>
          <NavLink to="/HuffmanEncoding" className={linkClasses}>HuffmanEncoding</NavLink>
          <NavLink to="/InterviewPrep" className={linkClasses}>Interview</NavLink>
        </div>
      </nav>

      {/* ✅ Run Button OUTSIDE Navbar, hidden on Compiler Page */}
      {location.pathname !== "/compiler" && (
        <button
          onClick={() => navigate("/compiler")}
          className="absolute top-3 right-4 bg-green-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition flex items-center gap-2"
        >
          ▶ Run
        </button>
      )}
    </div>
  );
}

export default Navbar;
