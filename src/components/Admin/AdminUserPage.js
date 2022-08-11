import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import AdminService from "../../services/adminService";

const AdminUserPage = () => {
  const token = localStorage.getItem("jwtToken");
  console.log(token);
  const decode = token ? jwtDecode(token) : null;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let adminService = new AdminService();
    adminService.getAllUsers(token).then((result) => {
      setUsers(result.data);
    });
  }, []);
  //console.log(users);
  let userItems = [];
  users.forEach((user) => {
    userItems.push(
      <div style={{ display: "flex" }}>
        <p>{user.userName}</p>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
      </div>
    );
  });
  const types = JSON.parse(
    window.atob(localStorage.getItem("jwtToken").split(".")[1])
  )["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  // console.log(types);
  // console.log(types.includes("Administrator"));
  // console.log(typeof types);
  //burayı düzenle
  return !types.includes("Administrator") ? (
    <p>sg</p>
  ) : (
    <div
      style={{
        marginLeft: "78px",
      }}
    >
      {userItems}
    </div>
  );
};

export default AdminUserPage;
