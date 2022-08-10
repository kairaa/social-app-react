import "./Post.css";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import jwtDecode from "jwt-decode";
import CardHeaderMenu from "./CardHeaderMenu";

const PostCard = (props) => {
  let username = props.userName;
  return (
    <Card
      sx={{ width: "975px", margin: "20px 0 20px 75px", border: "1px solid" }}
    >
      <CardHeader
        avatar={
          <Avatar
            alt={username}
            sx={{ bgcolor: red[500] }}
            style={{
              width: "56px",
              height: "56px",
            }}
            aria-label="recipe"
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to={"/users/" + props.id}
            >
              {username.substring(0, 1)}
            </Link>
          </Avatar>
        }
        title={
          <Typography style={{ fontSize: "1.5rem" }}>{props.title}</Typography>
        }
        action={props.action}
        subheader={props.postDate}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.context}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
