import { useNavigate } from "react-router-dom";

function NavBar({ transparent = true, loggedIn = false }) {
  const navigate = useNavigate();
  const bgStyle = transparent 
    ? { backgroundColor: "transparent" }
    : { 
        backgroundColor: "rgba(255, 255, 255, 0.1)"
      };

  return (
    <nav role="navigation" className="absolute top-0 left-0 w-full z-50">
      <div
        className="flex items-center justify-between p-6 text-white"
        style={bgStyle}
      >
        <div className="text-lg font-semibold tracking-wide">
          {loggedIn ? "CatchDex" : (
            <span
              className="text-lg font-normal transition-all duration-200 hover:opacity-75 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
          )}
        </div>
        {loggedIn && (
          <button
            className="text-lg font-normal transition-all duration-200 hover:opacity-75 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;