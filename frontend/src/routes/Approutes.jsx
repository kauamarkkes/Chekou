import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Sobre from "../pages/Sobre/Sobre";
import MyTasks from "../pages/Mytasks/Mytasks";
import Projects from "../pages/Projects/Projects";
import Analytics from "../pages/Analytics/Analytics";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/tarefas" element={<MyTasks />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/configuracoes" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;