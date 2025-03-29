import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goblins, potions } from "../data";

export default function Game() {
      const navigate = useNavigate();

      // set the global state of characters to be passed down to game component
      let [brian, setBrian] = useState({
            health: 100,
            strength: 10,
            potions: {
                        red: 3,
                        green: 1,
                        blue: 1,
                        orange: 0
            }
      });
      let [goblin, setGoblin] = useState({
            health: 0,
            strength: 0,
      });

      return (
            <div>
                  <div className="ml-4 mb-4 mt-4">
                        <button
                              type="button"
                              className="bg-amber-400 text-sm text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500"
                              onClick={() => navigate("/")}
                        >
                              Home
                        </button>
                  </div>
                  <div className="h-screen w-screen grid grid-cols-1 m-3 text-white">
                        {/* enemy container */}
                        <div className="grid grid-cols-1">
                              <div className="flex justify-center">
                                    Goblin Name
                              </div>
                              <div className="flex justify-center">
                                    <img src="/goblin_1.png" alt="goblin" className="h-[60px] w-[60px]"/>
                              </div>
                              <div className="flex justify-center">
                                    Goblin Health
                              </div>
                        </div>
                        {/* brian container */}
                        <div className="grid grid-cols-1">
                              <div className="flex justify-center">
                                    Brian
                              </div>
                              <div className="flex justify-center">
                                    <img src='/brian.png' alt="Brian" className="h-[60px] w-[60px]" />
                              </div>
                              <div className="flex justify-center">
                                    Brian Health
                              </div>
                        </div>
                  </div>
            </div>
      );
}
