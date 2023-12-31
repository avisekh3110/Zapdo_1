import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/nav";
import Blur from "./components/blur";
import Mode from "./components/mode";
import Calculator from "./pages/calculator";
import Notfound from "./pages/notfound";

function App() {
  return (
    <div className="bg-[#181B1F] h-screen overflow-hidden ">
      <BrowserRouter>
        <Navbar />
        <Blur />
        <Mode />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
