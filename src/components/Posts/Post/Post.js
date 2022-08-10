import "./Post.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import jwtDecode from "jwt-decode";

export const Post = (props) => {
  const token = localStorage.getItem("jwtToken");
  const decode = token ? jwtDecode(token) : null;
  //console.log(decode.uid);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let username = props.userName;
  return decode.uid == props.id ? (
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
        action={
          <div>
            <IconButton
              id="icon-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              aria-label="settings"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "icon-button",
              }}
            >
              <MenuItem onClick={handleClose}>Update Post</MenuItem>
              <MenuItem onClick={handleClose}>Delete Post</MenuItem>
            </Menu>
          </div>
        }
        title={
          <Typography style={{ fontSize: "1.5rem" }}>{props.title}</Typography>
        }
        subheader={props.postDate}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.context}
        </Typography>
      </CardContent>
    </Card>
  ) : (
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

// <Card className="post">
//   <div className="postDetails">
//     <p className="userName">
//       <Link to={"/users/" + props.id}>{props.userName}</Link>
//     </p>
//     <p className="date">{props.postDate}</p>
//   </div>
//   <div className="postContext">
//     <h3>{props.title}</h3>
//     <p>{props.context}</p>
//   </div>
// </Card>
