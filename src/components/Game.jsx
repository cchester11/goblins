import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { goblins } from "../data";
import EnemyContainer from "./EnemyContainer";
import BrianContainer from "./BrianContainer";
import TextContainer from "./TextContainer";
import { handleAttack, handleUsePotion } from "../lib";
import { fetchGoblin, handleBrianOptions } from "../utils";

export default function Game() {
      const navigate = useNavigate();

      // set the global state of characters to be passed down to game component
      let [brian, setBrian] = useState({
            health: 100,
            strength: [8, 9, 10],
            potions: {
                  red: 3,
                  green: 1,
                  blue: 1,
                  orange: 0,
            },
      });

      let [goblin, setGoblin] = useState({
            name: "",
            health: 0,
            strength: [0, 0, 0],
            image: "",
      });

      // goblin index is a number that increments each time a goblin is defeated; it will be used to fetch the corresponding goblin object in the goblins array
      let [goblinIdx, setGoblinIdx] = useState(0);

      // mirrors the index of the current weapon so that after each victory the next weapon is loaded
      let [weaponIdx, setWeaponIdx] = useState(0);

      // isActive will be passed to components to ensure that the game runs in a cyclical fashion
      let [isActive, setIsActive] = useState(false);

      // isAvailable is passed to contorls which toggles to true if user chooses to select a potion for turn
      let [isAvailable, setIsAvailable] = useState(false);

      let [goblinActive, setGoblinActive] = useState(false);

      // Game text
      let [gameText, setGameText] = useState("");

      // showIntroMessages function
      const showIntroMessages = () => {
            setTimeout(() => {
                  setTimeout(() => {
                        setGameText(
                              "Brian courageously goes forth against a hord of goblin foes!"
                        );
                        setTimeout(() => {
                              setGameText("");

                              setTimeout(() => {
                                    setGameText("Let the Battles Begin!");

                                    setTimeout(() => {
                                          setGameText("");

                                          setTimeout(() => {
                                                startGame();
                                          }, 1000);
                                    }, 3000);
                              }, 1000);
                        }, 3000);
                  }, 500);
            }, 500);
      };

      const startGame = () => {
            fetchGoblin(goblins, setGoblin, goblinIdx);

            handleBrianOptions(setGameText, setIsActive);
      };

      // useEffect to start the game; use empty array as second parameter to ensure the useEffect only occurs on mount
      useEffect(() => {
            showIntroMessages();
      }, []);

      return (
            <div className="min-h-screen w-full p-4 md:p-10">
                  {/* Home Button */}
                  <div className="ml-2 mb-4 mt-2">
                        <button
                              type="button"
                              className="bg-amber-400 text-sm text-white hover:bg-amber-200 px-4 py-2 rounded-xl outline-2 outline-offset-2 outline-blue-500"
                              onClick={() => navigate("/")}
                        >
                              Home
                        </button>
                  </div>

                  {/* Game Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-lg">
                        {/* Enemy Container */}
                        <EnemyContainer
                              goblinIdx={goblinIdx}
                              goblin={goblin}
                              goblinActive={goblinActive}
                              setGoblinActive={setGoblinActive}
                              brian={brian}
                              setBrian={setBrian}
                              setGameText={setGameText}
                              setIsActive={setIsActive}
                        />

                        {/* Brian Container */}
                        <BrianContainer
                              brian={brian}
                              setBrian={setBrian}
                              goblin={goblin}
                              setGoblin={setGoblin}
                              goblins={goblins}
                              goblinIdx={goblinIdx}
                              setGoblinIdx={setGoblinIdx}
                              goblinActive={goblinActive}
                              setGoblinActive={setGoblinActive}
                              
                              isActive={isActive}
                              setIsActive={setIsActive}
                              isAvailable={isAvailable}
                              setIsAvailable={setIsAvailable}
                              
                              weaponIdx={weaponIdx}
                              setWeaponIdx={setWeaponIdx}
                              
                              setGameText={setGameText}
                              handleAttack={handleAttack}
                              handleUsePotion={handleUsePotion}
                        />

                        {/* Text Container (Full Width on Mobile) */}
                        <div className="col-span-1 md:col-span-2">
                              <TextContainer gameText={gameText} />
                        </div>
                  </div>
            </div>
      );
}
