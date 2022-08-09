import "./MyNavbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const MyNavbar = () => {
  const token = localStorage.getItem("jwtToken");
  const decode = token ? jwtDecode(token) : null;
  const types = token
    ? JSON.parse(window.atob(localStorage.getItem("jwtToken").split(".")[1]))[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ]
    : null;

  if (token) {
    console.log(jwtDecode(token));
  }
  return token == undefined ? (
    <nav className="nav">
      <Link to="/" className="site-title">
        Social App
      </Link>
      <ul>
        <CustomLink to="/categories">Category</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </ul>
    </nav>
  ) : types.includes("Administrator") ? (
    <nav className="nav">
      <Link to="/" className="site-title">
        Social App
      </Link>
      <ul>
        <CustomLink to={"/users/" + decode.uid}>{decode.sub}</CustomLink>
        <CustomLink to="/categories">Category</CustomLink>
        <CustomLink to="/admin">Admin Panel</CustomLink>
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
        <CustomLink to={"/users/" + decode.uid}>{decode.sub}</CustomLink>
        <CustomLink to="/categories">Category</CustomLink>
        {/* <CustomLink to="/admin">Admin Panel</CustomLink> */}
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
