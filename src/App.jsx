import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Blur from "./components/blur";
import Mode from "./components/mode";
import Calculator from "./pages/calculator";

function App() {
  return (
    <div className="bg-[#181B1F] h-screen">
      <BrowserRouter>
        <Navbar />
        <Blur />
        <Mode />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
