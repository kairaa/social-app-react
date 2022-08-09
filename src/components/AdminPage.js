import jwtDecode from "jwt-decode";
import AdminUserPage from "./AdminUserPage";

const AdminPage = () => {
  const token = localStorage.getItem("jwtToken");
  console.log(token);
  const decode = token ? jwtDecode(token) : null;
  const types = JSON.parse(
    window.atob(localStorage.getItem("jwtToken").split(".")[1])
  )["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  return !types.includes("Administrator") ? (
    <p>sg</p>
  ) : (
    <div>{<AdminUserPage></AdminUserPage>}</div>
  );
};

export default AdminPage;
