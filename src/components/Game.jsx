import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goblins, potions } from "../data";
import EnemyContainer from "./EnemyContainer";
import BrianContainer from "./BrianContainer";
import Controls from "./Controls";
import TextContainer from "./TextContainer";
import { goblinTurn, handleAttack, handlePotion, handleUsePotion } from "../lib";

export default function Game() {
      const navigate = useNavigate();

      // set the global state of characters to be passed down to game component
      let [brian, setBrian] = useState({
            health: 100,
            strength: [8,9,10],
            potions: {
                  red: 3,
                  green: 1,
                  blue: 1,
                  orange: 0,
            },
      });

      let [goblin, setGoblin] = useState({
            health: 0,
            strength: [0,0,0],
      });

      // isActive will be passed to components to ensure that the game runs in a cyclical fashion
      let isActive = useState(false);

      // useEffect to start the game; use empty array as second parameter to ensure the useEffect only occurs on mount

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
                  <div className="h-screen w-screen grid grid-cols-2 text-white">
                        {/* enemy container */}
                        <EnemyContainer goblin={goblin} />
                        {/* brian container */}
                        <BrianContainer brian={brian} />
                        {/* text container */}
                        <TextContainer />
                        {/* brians controls container */}
                        <Controls />
                  </div>
            </div>
      );
}
