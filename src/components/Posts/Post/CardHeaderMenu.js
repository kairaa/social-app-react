import "./Post.css";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PostService from "../../../services/postService";
import { useEffect, useState } from "react";
import UpdatePopUpForm from "./UpdatePopUpForm.";

const CardHeaderMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  let postService = new PostService();
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
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
        <MenuItem
          onClick={() => {
            handleClose();
            console.log("clicked update");
            <UpdatePopUpForm></UpdatePopUpForm>;
          }}
        >
          Update Post
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            console.log("clicked delete");
            postService.deletePost(props.postId);
            window.location.reload();
          }}
        >
          Delete Post
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CardHeaderMenu;
