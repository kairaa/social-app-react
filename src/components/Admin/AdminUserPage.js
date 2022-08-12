import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminService from "../../services/adminService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(userName, firstName, lastName, email) {
  return { userName, firstName, lastName, email };
}

const AdminUserPage = () => {
  const token = localStorage.getItem("jwtToken");
  console.log(token);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let adminService = new AdminService();
    adminService.getAllUsers(token).then((result) => {
      setUsers(result.data);
    });
  }, []);
  let userItems = [];
  users.forEach((user) => {
    userItems.push(
      createData(
        <Link
          style={{
            color: "black",
          }}
          to={`/users/${user.id}`}
        >
          {user.userName}
        </Link>,
        user.firstName,
        user.lastName,
        user.email
      )
      // <div
      //   style={{
      //     display: "flex",
      //     gap: "10px",
      //     width: "fit-content",
      //   }}
      // >
      //   <Link to={`/users/${user.id}`}>{user.userName}</Link>
      //   <p>{user.firstName}</p>
      //   <p>{user.lastName}</p>
      //   <p>{user.email}</p>
      // </div>
    );
  });
  const types = JSON.parse(
    window.atob(localStorage.getItem("jwtToken").split(".")[1])
  )["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  //burayı düzenle
  return !types.includes("Administrator") ? (
    <h1>403! You're not authorized user for this operation!</h1>
  ) : (
    <div
      style={{
        marginLeft: "78px",
      }}
    >
      <h2>All Users in the App</h2>
      {/* {userItems} */}
      <TableContainer
        component={Paper}
        style={{
          margin: "20px 0",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userItems.map((row) => (
              <TableRow
                key={row.userName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userName}
                </TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminUserPage;
