import axios from "axios";

export default class PostService {
  getAllPosts() {
    return axios.get("https://localhost:7139/api/posts");
  }

  getPostById(postId) {
    return axios.get(`https://localhost:7139/api/posts/${postId}`);
  }
  getUserDetails(apiUserId) {
    return axios.get(`https://localhost:7139/api/account/${apiUserId}`);
  }

  deletePost(postId) {
    return axios.delete(`https://localhost:7139/api/posts/${postId}`);
  }

  getTopThreeUser() {
    return axios.get("https://localhost:7139/api/account/topThree");
  }
}
