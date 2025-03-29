import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "@/pages/Signin";
import Dashboard from "@/pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Dashboard />} />
        {/* 他のルート */}
      </Routes>
    </Router>
  );
}

export default App;
