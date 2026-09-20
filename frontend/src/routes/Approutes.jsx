import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Sobre from "../pages/Sobre/Sobre";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}

export default AppRoutes;