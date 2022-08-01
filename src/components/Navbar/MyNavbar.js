import "./MyNavbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const MyNavbar = () => {
  return (
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
