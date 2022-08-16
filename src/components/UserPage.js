import { useEffect, useState } from "react";
import PostService from "../services/postService";
import { Post } from "./Posts/Post/Post";
import { useParams } from "react-router-dom";
import PostCard from "./Posts/Post/PostCard";
import CardHeaderMenu from "./Posts/Post/CardHeaderMenu";
import NotFoundErrorPage from "../pages/ErrorPages/NotFoundErrorPage";
import jwtDecode from "jwt-decode";

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
      <h2 className="newsfeedTitle">{userPosts.userName}</h2>
      {postItems}
      <p>{postItems.length}</p>
    </div>
  );
};

export default UserPage;
