import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Editor from "./components/Editor";
import NavBar from "./components/NavBar";
import LoginPage from "./components/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={<Editor />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
