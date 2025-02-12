import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Editor from "./components/Editor";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
