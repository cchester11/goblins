import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import EndGame from "./components/EndGame";

function App() {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/game" element={<Game />} />
                        <Route path="/endgame" element={<EndGame />} />
                  </Routes>
            </BrowserRouter>
      );
}

export default App;
