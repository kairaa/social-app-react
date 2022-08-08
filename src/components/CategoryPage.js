import { useEffect, useState } from "react";
import PostService from "../services/postService";
import { Post } from "./Posts/Post/Post";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  let title = "";
  useEffect(() => {
    let postService = new PostService();
    postService.getAllPosts().then((result) => {
      setPosts(result.data);
    });
  }, []);

  let postItems = [];
  posts.forEach((post) => {
    if (post.categoryId == params.id) {
      title = post.category.name;
      postItems.push(
        <Post
          id={post.apiUser.id}
          title={post.title}
          context={post.context}
          userName={post.apiUser.userName}
          postDate={new Date(post.postDate).toLocaleString()}
        ></Post>
      );
    }
  });

  return postItems.length != 0 ? (
    <div className="newsfeed">
      <h2 className="newsfeedTitle">{title}</h2>
      {postItems}
    </div>
  ) : (
    <div>
      <p>No post found for this category</p>
    </div>
  );
};

export default CategoryPage;
