import axios from "axios";

export default class CategoryService {
  getAllCategories() {
    return axios.get("https://localhost:7139/api/categories");
  }

  getCategoryDetails(categoryId) {
    return axios.get(`https://localhost:7139/api/categories/${categoryId}`);
  }
}
