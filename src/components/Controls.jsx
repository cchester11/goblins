import { handlePotion } from "../lib";
import { weapons } from "../data";

export default function Controls({
      isActive,
      setIsActive,
      setGameText,
      handleAttack,
      brian,
      setBrian,
      goblin,
      setGoblin,
      setIsAvailable,
      setGoblinActive,
      setGoblinIdx,
      goblinIdx,
      goblins,
      weaponIdx,
      setWeaponIdx
}) {
      return (
            <div className="grid grid-cols-2 justify-between items-center align-middle border-2 border-amber-300 bg-gray-800 text-white rounded-xl p-5 shadow-lg m-3">
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
                                                      goblin,
                                                      weaponIdx
                                                );
                                          // set goblin health and game text
                                          setGameText(text);
                                          setGoblin((prevGoblin) => ({
                                                ...prevGoblin,
                                                health: goblinHealth,
                                          }));

                                          // set isActive back to false
                                          setIsActive(false);

                                          // also if goblin is dead, use handlePotion logic to add a potion to brians library
                                          // handlePotion adds random potion to brians library
                                          // setGameText to show that x potion has been added to brians library

                                          // Wait for 3 seconds, then update the game text again
                                          // TO DO
                                          // increment and set new weaponIdx ✅
                                          if (goblinHealth <= 0) {
                                                // add new potion to brians inventory
                                                const potionGained =
                                                      handlePotion(
                                                            brian,
                                                            setBrian
                                                      );

                                                // Increment goblin index safely
                                                setGoblinIdx((prevIdx) => {
                                                      const nextGoblinIdx =
                                                            prevIdx + 1;

                                                      // **Victory Check** - If all goblins are defeated, redirect to victory page
                                                      if (
                                                            nextGoblinIdx >=
                                                            goblins.length
                                                      ) {
                                                            navigate(
                                                                  "/victory"
                                                            );
                                                            return prevIdx; // Prevents unnecessary state updates after redirect
                                                      }

                                                      // increment and set weaponIdx here
                                                      setWeaponIdx(weaponIdx + 1);
                                                      
                                                      setGoblin({
                                                            ...goblins[
                                                                  nextGoblinIdx
                                                            ],
                                                      });

                                                      setGameText(
                                                            `You found a ${potionGained} potion!`
                                                      );

                                                      // Announce next opponent after delay
                                                      setTimeout(() => {
                                                            setGameText(
                                                                  `Your next opponent is ${goblins[nextGoblinIdx].name}! Go forth and be victorious once more! You've been awarded a new weapon called ${weapons[weaponIdx].name}!!`
                                                            );

                                                            setTimeout(() => {
                                                                  setGameText(
                                                                        "Click the Simulate button to simulate the goblin's attack!"
                                                                  );
                                                            }, 5000);
                                                      }, 3000);

                                                      return nextGoblinIdx;
                                                });
                                          } else {
                                                // If goblin is alive, delay next action message
                                                setTimeout(() => {
                                                      setGameText(
                                                            "Click the Simulate button to simulate the goblin's attack!"
                                                      );
                                                }, 3000);
                                          }

                                          // make goblin active to allow goblin attack
                                          setGoblinActive(true);
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
                                          // set isAvailable to true to allow potion to be clicked
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
