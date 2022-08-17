import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import PostService from "../../../services/postService";
import AddPostForm from "../../AddPostForm";
import TopThreeUserPage from "../../TopThreeUserPage";
import { Post } from "./Post";
import "./Posts.css";

export const Posts = () => {
  const token = localStorage.getItem("jwtToken");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let postService = new PostService();
    postService.getAllPosts().then((result) => {
      setPosts(result.data);
    });
  }, []);

  let postItems = [];
  posts.forEach((post) => {
    postItems.push(
      <Post
        id={post.apiUser.id}
        postId={post.id}
        title={post.title}
        context={post.context}
        userName={post.apiUser.userName}
        postDate={new Date(post.postDate).toLocaleString()}
      ></Post>
    );
  });

  return token !== null ? (
    <Box
      sx={{
        margin: "40px auto",
      }}
    >
      <AddPostForm></AddPostForm>
      <div style={{ display: "flex", gap: "80px", margin: "0 auto" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h2 className="newsfeedTitle">Newsfeed</h2>
          {postItems}
        </Box>
        <TopThreeUserPage></TopThreeUserPage>
      </div>
    </Box>
  ) : (
    <Box
      sx={{
        margin: "40px auto",
        width: "fit-content",
      }}
    >
      <h2 className="newsfeedTitle">Newsfeed</h2>
      {postItems}
    </Box>
  );
};

/*
 */
