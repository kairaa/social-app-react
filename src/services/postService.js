import axios from "axios";

export default class PostService {
  getAllPosts() {
    return axios.get("https://localhost:7139/api/posts");
  }
}
