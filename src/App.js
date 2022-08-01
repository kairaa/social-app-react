import { MyNavbar } from "./components/Navbar/MyNavbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import "./App.css";

function App() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
