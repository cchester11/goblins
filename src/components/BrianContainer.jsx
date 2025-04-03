import { weapons } from "../data";
import { handlePotion } from "../lib";

// import Brians state and pass as props
export default function BrianContainer({
      brian,
      setBrian,
      goblin,
      setGoblin,
      goblins,
      goblinIdx,
      setGoblinIdx,
      goblinActive,
      setGoblinActive,
      isActive,
      setIsActive,
      isAvailable,
      setIsAvailable,
      weaponIdx,
      setWeaponIdx,
      setGameText,
      handleAttack,
      handleUsePotion,
}) {
      // TO DO
      // import weapons object above ✅
      // create a variable that represents the current weapon (ex: weapons[weaponIdx].image) ✅

      return (
            // master container
            <div className="grid grid-cols-1 border-2 border-amber-300 bg-gray-800 text-white rounded-xl p-5 shadow-lg m-3">
                  {/* container for brians information */}
                  <div className="grid grid-cols-3 items-center">
                        {/* attack button */}
                        <div className="flex h-8  md:h-12 justify-center items-center">
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

                                                // Wait for 3 seconds, then update the game text again
                                                if (goblinHealth <= 0) {
                                                      // add new potion to brians inventory
                                                      const potionGained =
                                                            handlePotion(
                                                                  brian,
                                                                  setBrian
                                                            );

                                                      // Increment goblin index safely
                                                      setGoblinIdx(
                                                            (prevIdx) => {
                                                                  const nextGoblinIdx =
                                                                        prevIdx +
                                                                        1;

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
                                                                  setWeaponIdx(
                                                                        weaponIdx +
                                                                              1
                                                                  );

                                                                  setGoblin({
                                                                        ...goblins[
                                                                              nextGoblinIdx
                                                                        ],
                                                                  });

                                                                  setGameText(
                                                                        `You found a ${potionGained} potion!`
                                                                  );

                                                                  // Announce next opponent after delay
                                                                  setTimeout(
                                                                        () => {
                                                                              setGameText(
                                                                                    `Your next opponent is ${goblins[nextGoblinIdx].name}! Go forth and be victorious once more! You've been awarded a new weapon called ${weapons[weaponIdx].name}!!`
                                                                              );

                                                                              setTimeout(
                                                                                    () => {
                                                                                          setGameText(
                                                                                                "Click the Simulate button to simulate the goblin's attack!"
                                                                                          );
                                                                                    },
                                                                                    5000
                                                                              );
                                                                        },
                                                                        3000
                                                                  );

                                                                  return nextGoblinIdx;
                                                            }
                                                      );
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

                        {/* container for Brians name, image and health */}
                        <div className="">
                              {/* sub container for name, health and image */}
                              <div className="grid grid-rows-3 justify-center h-full items-center">
                                    {/* Brian name container */}
                                    <div className="flex justify-center">
                                          Brian
                                    </div>
                                    {/* Brian's image container */}
                                    <div className="flex justify-center">
                                          <img
                                                src="/brian.png"
                                                alt="Brian"
                                                className="h-[60px] w-[60px]"
                                          />
                                    </div>
                                    {/* Brian's health container */}
                                    <div className="flex justify-center">
                                          Health: {brian.health}
                                    </div>
                              </div>
                        </div>

                        {/* potion button */}
                        <div className="flex justify-center h-8 md:h-12 items-center">
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

                        {/* container for Brians weapon */}
                        <div>
                              {/* dummy div */}
                        </div>
                        <div className="flex items-center justify-center">
                              <button
                                    type="button"
                                    className="cursor-pointer inline-flex flex-col items-center justify-center w-20 h-20 rounded-lg bg-gray-800 border-2 border-gray-700 hover:border-white transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md"
                              >
                                    <img
                                          // to do
                                          // place above variable in the source
                                          src={
                                                weapons[weaponIdx].image ||
                                                "/weapon_1.png"
                                          }
                                          alt="Brian's Weapon"
                                          className="h-[60px] w-[60px]"
                                    />
                              </button>
                        </div>
                  </div>

                  {/* Brian's potions container */}
                  <div className="flex justify-center mt-4">
                        <div className="flex flex-wrap gap-6 justify-center w-full">
                              {["red", "green", "blue", "orange"].map(
                                    (color) => (
                                          <button
                                                key={color}
                                                type="button"
                                                className="cursor-pointer inline-flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gray-800 border-2 border-gray-700 hover:border-white transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md"
                                                onClick={() => {
                                                      if (isAvailable) {
                                                            const {
                                                                  health = vals.health,
                                                                  strength = vals.strength,
                                                                  potionsLeft = vals.potionsLeft,
                                                                  text = vals.text,
                                                            } = handleUsePotion(
                                                                  brian,
                                                                  color
                                                            );

                                                            setBrian(
                                                                  (
                                                                        prevBrian
                                                                  ) => ({
                                                                        ...prevBrian,
                                                                        health: health,
                                                                        strength: strength,
                                                                        potions: {
                                                                              ...prevBrian.potions,
                                                                              [color]: potionsLeft,
                                                                        },
                                                                  })
                                                            );

                                                            setGameText(text);

                                                            setIsAvailable(
                                                                  false
                                                            );

                                                            setGoblinActive(
                                                                  true
                                                            );

                                                            // Wait for 3 seconds, then update the game text again
                                                            setTimeout(() => {
                                                                  setGameText(
                                                                        "Click the Simulate button to simulate the goblin's attack!"
                                                                  );
                                                            }, 3000);
                                                      }
                                                }}
                                          >
                                                <img
                                                      src={`/potion_${color}.png`}
                                                      alt={`${color} potion`}
                                                      className="h-10 w-10 md:h-12 md:w-12 transition-all duration-200 hover:drop-shadow-md"
                                                />
                                                <span className="text-sm font-medium mt-1">
                                                      {brian.potions?.[color] ??
                                                            0}
                                                </span>
                                          </button>
                                    )
                              )}
                        </div>
                  </div>
            </div>
      );
}
