import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Blog from "./components/Blog/Blog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Blog />} />
        <Route
          path="/home/:department?/:year?/:section?"
          index
          element={<Blog />}
        />
        <Route path="/profile" index element={<Blog />} />
        <Route path="/logout" index element={<Blog />} />
        <Route path="/timeline" index element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
