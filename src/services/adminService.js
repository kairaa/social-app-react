import axios from "axios";

export default class AdminService {
  getAllUsers(token) {
    return axios.get("https://localhost:7139/api/account", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteCategory(id, token) {
    console.log(id);
    return axios.delete(`https://localhost:7139/api/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
