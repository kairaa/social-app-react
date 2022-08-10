import { useEffect, useState } from "react";
import PostService from "../../../services/postService";
import AddPostForm from "../../AddPostForm";
import { Post } from "./Post";
import "./Posts.css";
import jwtDecode from "jwt-decode";

export const Posts = () => {
  const token = localStorage.getItem("jwtToken");
  //const decode = token ? jwtDecode(token) : null;
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

  // console.log("home page: " + localStorage.getItem("jwtToken"));

  return token !== null ? (
    <div className="newsfeed">
      <AddPostForm></AddPostForm>
      <h2 className="newsfeedTitle">Newsfeed</h2>
      {postItems}
    </div>
  ) : (
    <div className="newsfeed">
      <h2 className="newsfeedTitle">Newsfeed</h2>
      {postItems}
    </div>
  );
};
