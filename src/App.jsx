import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GamePage from "./pages/GamePage/GamePage";
import Intro from "./pages/Intro/Intro";

function App() {
  return (
    <div className="pageContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
