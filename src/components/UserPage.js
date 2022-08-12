import { useEffect, useState } from "react";
import PostService from "../services/postService";
import { Post } from "./Posts/Post/Post";
import { useParams } from "react-router-dom";
import PostCard from "./Posts/Post/PostCard";
import CardHeaderMenu from "./Posts/Post/CardHeaderMenu";

const UserPage = () => {
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
        <PostCard
          action={<CardHeaderMenu postId={post.id}></CardHeaderMenu>}
          id={post.apiUser.id}
          postId={post.id}
          title={post.title}
          context={post.context}
          userName={post.apiUser.userName}
          postDate={new Date(post.postDate).toLocaleString()}
        ></PostCard>
      );
    });
  }

  return posts === undefined ? (
    <p>User not found</p>
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
