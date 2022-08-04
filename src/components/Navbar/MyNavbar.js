import "./MyNavbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const MyNavbar = () => {
  return localStorage.getItem("jwtToken") != undefined ? (
    <nav className="nav">
      <Link to="/" className="site-title">
        Social App
      </Link>
      <ul>
        <CustomLink
          to="/"
          onClick={() => {
            localStorage.removeItem("jwtToken");
            window.location.reload();
          }}
        >
          Logout
        </CustomLink>
      </ul>
    </nav>
  ) : (
    <nav className="nav">
      <Link to="/" className="site-title">
        Social App
      </Link>
      <ul>
        <CustomLink to="/register">Register</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
