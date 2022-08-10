import axios from "axios";

export default class PostService {
  getAllPosts() {
    return axios.get("https://localhost:7139/api/posts");
  }

  getUserDetails(apiUserId) {
    return axios.get(`https://localhost:7139/api/account/${apiUserId}`);
  }

  deletePost(postId) {
    return axios.delete(`https://localhost:7139/api/posts/${postId}`);
  }
}
