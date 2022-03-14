import { Routes, Route } from "react-router-dom";

import Layout from "./components/utilityComponents/Layout";
import PrivateRoute from "./components/utilityComponents/PrivateRoute";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
