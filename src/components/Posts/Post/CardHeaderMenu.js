import "./Post.css";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PostService from "../../../services/postService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CardHeaderMenu = (props) => {
  const MySwal = withReactContent(Swal);
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
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            to={"/posts/" + props.postId}
          >
            Update Post
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            // let conf = window.confirm("Are you sure to delete this post!");
            // if (conf) {
            //   handleClose();
            //   console.log("clicked delete");
            //   postService.deletePost(props.postId);
            //   window.location.reload();
            // }
            MySwal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                postService.deletePost(props.postId);
                MySwal.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                ).then(window.location.reload());
              }
            });
          }}
        >
          Delete Post
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CardHeaderMenu;
