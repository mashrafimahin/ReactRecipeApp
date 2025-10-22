// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styled
import Global from "./Style/Global.Style";

// Component
import MainComp from "./Component/Pages/MainComp";
import Login from "./Component/Pages/Login";
import Signup from "./Component/Pages/Signup";
import Dashboard from "./Component/Pages/Dashboard";

function App() {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
