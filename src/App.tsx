import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "@/pages/Signin";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Layout />} />
        {/* 他のルート */}
      </Routes>
    </Router>
  );
}

export default App;
