import { useNavigate } from "react-router-dom";
import { handleGoblinTurn } from "../utils";
import { endGame } from "../lib";

export default function EnemyContainer({
      brian,
      goblin,
      setBrian,
      setGameText,
      goblinActive,
      setGoblinActive,
      setIsActive,
}) {
      const navigate = useNavigate();

      return (
            <div className="grid grid-cols-1 border-2 border-amber-300 bg-gray-800 text-white rounded-xl p-5 shadow-lg m-3">
                  <div className="flex justify-center">
                        {goblin.name || "Goblin Name"}
                  </div>
                  <div className="flex justify-center">
                        <img
                              src={goblin.image || "/goblin_1.png"}
                              alt="goblin"
                              className="h-[60px] w-[60px]"
                        />
                  </div>
                  <div className="flex justify-center">
                        Goblin Health: {goblin.health}
                  </div>
                  <div className="grid grid-cols-1 m-3 justify-between items-center align-middle">
                        <div className="flex justify-center">
                              <button
                                    type="button"
                                    className="bg-amber-400 text-sm text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500"
                                    onClick={() => {
                                          if (goblinActive) {
                                                handleGoblinTurn(
                                                      brian,
                                                      goblin,
                                                      setBrian,
                                                      setGameText
                                                );

                                                setGoblinActive(false);

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
