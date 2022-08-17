import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import PostService from "../services/postService";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const TopThreeUserPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let postService = new PostService();
    postService.getTopThreeUser().then((result) => {
      setUsers(result.data);
    });
  }, []);

  let userItems = [];
  users.forEach((user) => {
    userItems.push(
      <Card
        style={{
          margin: "10px auto",
          border: "1px solid black",
          minWidth: "450px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to={"/users/" + user.id}
              >
                {user.userName.substring(0, 1)}
              </Link>
            </Avatar>
          }
          title={
            <Typography style={{ fontSize: "1.5rem" }}>
              {user.userName}
            </Typography>
          }
        />
        <CardContent>
          {user.firstName} {user.lastName}
        </CardContent>
      </Card>
    );
  });

  return (
    <Box
      sx={{
        width: "fit-content",
      }}
    >
      <h2 style={{ paddingBottom: "1rem" }}>Top Three Users</h2>
      {userItems}
    </Box>
  );
};

export default TopThreeUserPage;
