import { useEffect, useState } from "react";
import PostService from "../services/postService";
import { Post } from "./Posts/Post/Post";
import { useParams } from "react-router-dom";
import PostCard from "./Posts/Post/PostCard";
import CardHeaderMenu from "./Posts/Post/CardHeaderMenu";
import NotFoundErrorPage from "../pages/ErrorPages/NotFoundErrorPage";
import jwtDecode from "jwt-decode";
import { Avatar, Box } from "@mui/material";
import { red } from "@mui/material/colors";

const UserPage = () => {
  const token = localStorage.getItem("jwtToken");
  const decode = token ? jwtDecode(token) : null;
  let activeUserId = token ? decode.uid : null;
  const params = useParams();

  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    let postService = new PostService();
    postService.getUserDetails(params.id).then((result) => {
      setUserPosts(result.data);
    });
  }, []);

  let posts = userPosts.posts;

  let postItems = [];
  if (posts !== undefined) {
    posts.forEach((post) => {
      postItems.push(
        post.apiUser.id == activeUserId ? (
          <PostCard
            action={<CardHeaderMenu postId={post.id}></CardHeaderMenu>}
            id={post.apiUser.id}
            postId={post.id}
            title={post.title}
            context={post.context}
            userName={post.apiUser.userName}
            postDate={new Date(post.postDate).toLocaleString()}
          ></PostCard>
        ) : (
          <PostCard
            id={post.apiUser.id}
            postId={post.id}
            title={post.title}
            context={post.context}
            userName={post.apiUser.userName}
            postDate={new Date(post.postDate).toLocaleString()}
          ></PostCard>
        )
      );
    });
  }

  return posts === undefined ? (
    <NotFoundErrorPage></NotFoundErrorPage>
  ) : postItems.length === 0 ? (
    <p>User {userPosts.userName} has no post!</p>
  ) : (
    <div>
      {/* <h2 className="newsfeedTitle">{userPosts.userName}</h2> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
          margin: "40px auto",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Avatar
          // sx={{ bgcolor: red[500] }}
          src="https://pbs.twimg.com/media/Efpe1GYX0AYHuoL.jpg:large"
          ss
          style={{
            width: "120px",
            height: "120px",
          }}
          aria-label="recipe"
        >
          {userPosts.userName.substring(0, 1)}
        </Avatar>
        <h4
          style={{
            margin: "0",
            padding: "0",
          }}
        >
          {userPosts.userName}
        </h4>
        <h5
          style={{
            margin: "0",
            padding: "0",
          }}
        >
          {userPosts.firstName} {userPosts.lastName}
        </h5>
        <p
          style={{
            margin: "0",
            padding: "0",
          }}
        >
          {userPosts.email}
        </p>
      </Box>
      <Box
        sx={{
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        {postItems.reverse()}
      </Box>
    </div>
  );
};

export default UserPage;
