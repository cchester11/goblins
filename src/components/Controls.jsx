export default function Controls({
      isActive,
      setIsActive,
      setGameText,
      handleAttack,
      handleUsePotion,
      brian,
      goblin,
      setBrian,
      setGoblin,
      setIsAvailable,
      setGoblinActive,
}) {
      return (
            <div className="grid grid-cols-2 border-2 border-amber-300 m-3 justify-between items-center align-middle">
                  <div className="flex justify-center">
                        <button
                              type="button"
                              className="bg-amber-400 text-sm text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500"
                              onClick={() => {
                                    if (isActive) {
                                          // handleAttack
                                          const { goblinHealth, text } =
                                                handleAttack(
                                                      brian.strength,
                                                      goblin
                                                );
                                          // set goblin health and game text
                                          setGameText(text);
                                          setGoblin({
                                                ...goblin,
                                                health: goblinHealth,
                                          });
                                          // set isActive back to false
                                          setIsActive(false);
                                          // make goblin active to allow goblin attack
                                          setGoblinActive(true);

                                          // Wait for 3 seconds, then update the game text again
                                          setTimeout(() => {
                                                setGameText(
                                                      "Click the Simulate button to simulate the goblin's attack!"
                                                );
                                          }, 3000);
                                    }
                              }}
                        >
                              Attack
                        </button>
                  </div>
                  <div className="flex justify-center">
                        <button
                              type="button"
                              className="bg-amber-400 text-sm text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500"
                              onClick={() => {
                                    if (isActive) {
                                          // setGameText to "choose one of Brians potions!"
                                          setGameText(
                                                "Choose a Potion from Brian's library!"
                                          );
                                          // use setPotion to toggle potionAvailable to true
                                          setIsAvailable(true);
                                          // set isActive back to false
                                          setIsActive(false);
                                    }
                              }}
                        >
                              Potion
                        </button>
                  </div>
            </div>
      );
}
