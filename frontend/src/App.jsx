import Sidebar from "./components/Sidebar/Sidebar";
import AppRoutes from "./routes/Approutes";
import "./App.css";

export default function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <AppRoutes />
    </div>
  );
}