import { Routes, Route } from "react-router-dom";
import "./sass/main.scss";
import React, { useState } from "react";
import { ThemeContext } from "./themeContext";
import { Layout, Auth, Home, About } from "./pages";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      <Routes>
        <Route path="login" element={<Auth />} /> :
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
