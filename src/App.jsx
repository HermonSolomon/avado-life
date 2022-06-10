import { Routes, Route } from "react-router-dom";

// Styles
import "./App.scss";
// Page components
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/Home/HomePage";
import Culture from "./pages/ContentPages/CulturePage/Culture";
import Join from "./pages/ContentPages/JoinUsPage/Join";
import Life from "./pages/ContentPages/WorkLife/Life";
import Growth from "./pages/ContentPages/GrowthPage/Growth";
import Working from "./pages/ContentPages/WaysOfWorking/Working";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/join" element={<Join />} />
        <Route path="/life" element={<Life />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/working" element={<Working />} />
      </Routes>
    </div>
  );
}

export default App;
