// import Brians state and pass as props
export default function BrianContainer({
      brian,
      setBrian,
      isAvailable,
      setIsAvailable,
      handleUsePotion,
      setGameText,
      setGoblinActive,
}) {
      return (
            // master container
            <div className="grid grid-cols-1 border-2 border-amber-300 bg-gray-800 text-white rounded-xl p-5 shadow-lg m-3">
                  
                  {/* container for brians information */}
                  <div className="grid grid-cols-5">
                        {/* container for Brians name, image and health */}
                        <div className="col-span-4">
                              {/* Brian name container */}
                              <div className="flex justify-center">Brian</div>
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
                        {/* container for Brians weapon */}
                        <div>
                              Brians Weapon
                        </div>
                  </div>

                  {/* <div className="flex justify-center">
                        <span className="p-2">Attack Values: </span>
                        {brian.strength.map((val) => (
                              <p className="p-2">{val}</p>
                        ))}
                  </div> */}

                  {/* Brian's potions container */}
                  <div className="flex justify-center mt-4">
                        <div className="grid grid-cols-4 gap-6">
                              {["red", "green", "blue", "orange"].map(
                                    (color) => (
                                          <button
                                                key={color}
                                                type="button"
                                                className="cursor-pointer inline-flex flex-col items-center justify-center w-20 h-20 rounded-lg bg-gray-800 border-2 border-gray-700 hover:border-white transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md"
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
                                                      className="h-12 w-12 transition-all duration-200 hover:drop-shadow-md"
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
