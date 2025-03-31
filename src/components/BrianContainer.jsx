// import Brians state and pass as props
export default function BrianContainer({ brian, setBrian, isAvailable, setIsAvailable, handleUsePotion }) {
      return (
            <div className="grid grid-cols-1 border-2 border-amber-300 m-3">
                  <div className="flex justify-center">Brian</div>
                  <div className="flex justify-center">
                        <img
                              src="/brian.png"
                              alt="Brian"
                              className="h-[60px] w-[60px]"
                        />
                  </div>
                  <div className="flex justify-center">
                        Health: {brian.health}
                  </div>
                  <div className="flex justify-center mt-4">
                        <div className="grid grid-cols-4 gap-6">
                              {["red", "green", "blue", "orange"].map(
                                    (color) => (
                                          <button
                                                key={color}
                                                type="button"
                                                className="cursor-pointer inline-flex flex-col items-center justify-center w-20 h-20 rounded-lg bg-gray-800 border-2 border-gray-700 hover:border-white transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md"
                                                onClick={() => {
                                                      if(isAvailable) {
                                                            const { health, potionsLeft } = handleUsePotion(brian, color);

                                                            setBrian((prevBrian) => ({
                                                                  ...prevBrian,
                                                                  health: health,
                                                                  potions: {
                                                                        ...prevBrian.potions,
                                                                        [color]: potionsLeft
                                                                  }
                                                            }))

                                                            setIsAvailable(false);
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
