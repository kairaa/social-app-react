import jwtDecode from "jwt-decode";
import AddCategory from "./Admin/AddCategory";
import DeleteCategory from "./Admin/DeleteCategory";
import AdminUserPage from "./Admin/AdminUserPage";
const AdminPage = () => {
  const token = localStorage.getItem("jwtToken");
  //console.log(token);
  const decode = token ? jwtDecode(token) : null;
  const types = JSON.parse(
    window.atob(localStorage.getItem("jwtToken").split(".")[1])
  )["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  return !types.includes("Administrator") ? (
    <p>sg</p>
  ) : (
    <div>
      <AdminUserPage></AdminUserPage>
      <AddCategory></AddCategory>
      <DeleteCategory></DeleteCategory>
    </div>
  );
};

export default AdminPage;
