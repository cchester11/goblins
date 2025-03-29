import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";

function App() {
      // set the global state of characters to be passed down to game component
      let [brian, setBrian] = useState({
            health: 100,
            strength: 10,
      });
      let [goblin, setGoblin] = useState({
            health: 0,
            strength: 0,
      });

      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route 
                          path="/game" 
                          element={<Game 
                            brian={brian}
                            setBrian={setBrian}
                            gobin={goblin}
                            setGoblin={setGoblin}
                        />} />
                  </Routes>
            </BrowserRouter>
      );
}

export default App;
