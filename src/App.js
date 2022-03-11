import { Routes, Route } from "react-router-dom";

import Layout from "./components/utilityComponents/Layout";
import PrivateRoute from "./components/utilityComponents/PrivateRoute";
import LoginPage from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
