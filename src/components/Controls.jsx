// handleAttack function should be imported here and used in onClick listener in attack button
// handleUsePotion function should be imported here and used in onClick listener in potion button
// should be passed brian and goblin state for the handleAttack function
export default function Controls({ isActive, setIsActive, handleAttack, handlePotion, brian, goblin, setBrian, setGoblin }) {
      return (
            <div className="grid grid-cols-2 border-2 border-amber-300 m-3 justify-between items-center align-middle">
                  <div className="flex justify-center">
                        <button
                              type="button"
                              className="bg-amber-400 text-sm text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500"
                              onClick={() => {
                                    if(isActive) {
                                          // handleAttack
                                          handleAttack(brian.strength, goblin)
                                          // set isActive back to false
                                          setIsActive(false);
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
                                    if(isActive) {
                                          // handleUsePotion
                                          
                                          // set isActive back to false
                                    }
                              }}
                        >
                              Potion
                        </button>
                  </div>
            </div>
      );
}
