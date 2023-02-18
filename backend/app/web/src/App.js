import { Routes, Route } from "react-router-dom";
import "./sass/main.scss";
import { Layout, Auth, Home, About } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="auth" element={<Auth />} /> :
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
