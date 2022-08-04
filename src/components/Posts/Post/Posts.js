import { useEffect, useState } from "react";
import PostService from "../../../services/postService";
import { Post } from "./Post";
import "./Posts.css";

export const Posts = () => {
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
        title={post.title}
        context={post.context}
        userName={post.apiUser.userName}
        postDate={new Date(post.postDate).toLocaleDateString()}
      ></Post>
    );
  });

  console.log("home page: " + localStorage.getItem("jwtToken"));

  return (
    <div className="newsfeed">
      <h2 className="newsfeedTitle">Newsfeed</h2>
      {postItems}
    </div>
  );
};
