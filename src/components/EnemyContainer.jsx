import { handleGoblinTurn } from "../utils";

export default function EnemyContainer({ brian, goblin, setBrian, setGameText, goblinActive, setGoblinActive }) {
      return (
            <div className="grid grid-cols-1 border-2 border-amber-300 m-3">
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
                                          if(goblinActive) {
                                                handleGoblinTurn(brian, goblin, setBrian, setGameText);

                                                setGoblinActive(false);
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
