import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { goblins, potions } from "../data";
import EnemyContainer from "./EnemyContainer";
import BrianContainer from "./BrianContainer";
import Controls from "./Controls";
import TextContainer from "./TextContainer";
import {
      goblinTurn,
      handleAttack,
      handlePotion,
      handleUsePotion,
} from "../lib";
import { fetchGoblin, handleBrianOptions, handleGoblinTurn } from "../utils";

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

      // isActive will be passed to components to ensure that the game runs in a cyclical fashion
      let [isActive, setIsActive] = useState(false);

      // setPotion will be passed to controls which will set potionChoice to true
      // then the user will need to click a potion button
      // the chosen button will have a value that can set potionChoice.selection
      // this will be passed back to handleUsePotion
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

            // handleGoblinTurn(brian, goblin, setBrian, setGameText);

            // conditional checks health of goblin and brian
            // if brian is dead, end game
            // if goblin is dead, increment goblinIdx 1 and go back to function 1

            // reiterate 2 and 3 and then conditional
      };

      // useEffect to start the game; use empty array as second parameter to ensure the useEffect only occurs on mount
      useEffect(() => {
            showIntroMessages();
      }, []);

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
                  <div className="h-screen w-screen p-10 grid grid-cols-2 text-white text-lg">
                        {/* enemy container */}
                        <EnemyContainer
                              goblin={goblin}
                              goblinActive={goblinActive}
                              setGoblinActive={setGoblinActive}
                              brian={brian}
                              setBrian={setBrian}
                              setGameText={setGameText}
                        />
                        {/* brian container */}
                        <BrianContainer
                              brian={brian}
                              setBrian={setBrian}
                              isAvailable={isAvailable}
                              setIsAvailable={setIsAvailable}
                              handleUsePotion={handleUsePotion}
                              setGameText={setGameText}
                              setGoblinActive={setGoblinActive}
                        />
                        {/* text container */}
                        <TextContainer gameText={gameText} />
                        {/* brians controls container */}
                        <Controls
                              isActive={isActive}
                              setIsActive={setIsActive}
                              setGameText={setGameText}
                              handleAttack={handleAttack}
                              handleUsePotion={handleUsePotion}
                              brian={brian}
                              goblin={goblin}
                              setBrian={setBrian}
                              setGoblin={setGoblin}
                              setIsAvailable={setIsAvailable}
                              setGoblinActive={setGoblinActive}
                        />
                  </div>
            </div>
      );
}
