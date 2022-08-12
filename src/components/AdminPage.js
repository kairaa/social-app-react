import jwtDecode from "jwt-decode";
import AddCategory from "./Admin/AddCategory";
import DeleteCategory from "./Admin/DeleteCategory";
import AdminUserPage from "./Admin/AdminUserPage";
import UpdateCategory from "./Admin/UpdateCategory";
import { Box } from "@mui/system";
const AdminPage = () => {
  const token = localStorage.getItem("jwtToken");
  const types = JSON.parse(
    window.atob(localStorage.getItem("jwtToken").split(".")[1])
  )["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  return !types.includes("Administrator") ? (
    <h1>403! You're not authorized user for this operation!</h1>
  ) : (
    <div>
      <AdminUserPage></AdminUserPage>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          marginLeft: "78px",
        }}
      >
        <AddCategory></AddCategory>
        <DeleteCategory></DeleteCategory>
      </Box>
      <UpdateCategory></UpdateCategory>
    </div>
  );
};

export default AdminPage;
