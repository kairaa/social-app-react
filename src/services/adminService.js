import axios from "axios";

export default class AdminService {
  getAllUsers(token) {
    return axios.get("https://localhost:7139/api/account", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
