import { useNavigate } from "react-router-dom";
import { handleGoblinTurn } from "../utils";
import { endGame } from "../lib";
import { goblins } from "../data";

export default function EnemyContainer({
      brian,
      goblin,
      setBrian,
      setGameText,
      goblinActive,
      setGoblinActive,
      setIsActive,
      goblinIdx,
      buttonFlicker,
      setButtonFlicker
}) {
      const navigate = useNavigate();
      const level = goblinIdx + 1;
      const maxHealth = goblins[goblinIdx].health;

      return (
            // master container
            <div className="grid grid-cols-1 border-2 border-amber-300 bg-gray-800 text-white rounded-xl p-5 shadow-lg m-3">
                  {/* Level Container */}
                  <div className="flex justify-center text-2xl">
                        {"Level: " + level}
                  </div>
                  {/* Goblins Name */}
                  <div className="flex justify-center">
                        {goblin.name || "Goblin Name"}
                  </div>
                  {/* Goblins Image */}
                  <div className="flex justify-center">
                        <img
                              src={goblin.image || "/goblin_1.png"}
                              alt="goblin"
                              className="h-[60px] w-[60px]"
                        />
                  </div>
                  {/* Goblins Health Bar */}
                  <div className="flex justify-center items-center">
                        <div className="w-2/16 bg-red-600 rounded-full h-1.5 overflow-hidden">
                              <div
                                    className="bg-green-600 h-1.5 rounded-full"
                                    style={{
                                          width: `${
                                                (goblin.health / maxHealth) *
                                                100
                                          }%`,
                                    }}
                              ></div>
                        </div>
                  </div>
                  {/* Simulate Goblin Attack */}
                  <div className="grid grid-cols-1 m-3 justify-between items-center align-middle">
                        <div className="flex justify-center">
                              <button
                                    type="button"
                                    className={`bg-amber-400 text-sm text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500 ${buttonFlicker.goblin ? "flicker" : ""}`}
                                    onClick={() => {
                                          if (goblinActive) {
                                                handleGoblinTurn(
                                                      brian,
                                                      goblin,
                                                      setBrian,
                                                      setGameText
                                                );

                                                setGoblinActive(false);

                                                // change buttonFlicker state
                                                setButtonFlicker((prev) => ({
                                                      ...prev,
                                                      goblin: false,
                                                      attack_potion: true
                                                }))

                                                // conditional here that checks health of brian
                                                // if brian is dead, end game
                                                if (brian.health <= 0) {
                                                      endGame(navigate);
                                                } else {
                                                      // if not, set game text back to attack or use potion and set isActive to true to restart the process
                                                      setTimeout(() => {
                                                            setGameText(
                                                                  "Attack or Use Potion? (Select from the button options)"
                                                            );

                                                            setIsActive(true);
                                                      }, 3500);
                                                }
                                          }
                                    }}
                              >
                                    Simulate
                              </button>
                        </div>
                  </div>
            </div>
      );
}
