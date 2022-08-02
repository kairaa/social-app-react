import { MyNavbar } from "./components/Navbar/MyNavbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserPage from "./components/UserPage";
import { Posts } from "./components/Posts/Post/Posts";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Posts></Posts>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/users/:id" element={<UserPage></UserPage>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
