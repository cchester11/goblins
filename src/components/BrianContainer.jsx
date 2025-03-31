// import Brians state and pass as props
export default function BrianContainer({ brian }) {
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
                  <div className="grid grid-cols-4 justify-center items-center ml-10">
                        <button type="button" className="cursor-pointer">
                              <img src="/potion_red.png" alt="red potion" />
                              <span>{brian.potions.red}</span>
                        </button>
                        <button type="button" className="cursor-pointer">
                              <img src="/potion_green.png" alt="green potion" />
                              <span>{brian.potions.green}</span>
                        </button>
                        <button type="button" className="cursor-pointer">
                              <img src="/potion_blue.png" alt="blue potion" />
                              <span>{brian.potions.blue}</span>
                        </button>
                        <button type="button" className="cursor-pointer">
                              <img
                                    src="/potion_orange.png"
                                    alt="orange potion"
                              />
                              <span>{brian.potions.orange}</span>
                        </button>
                  </div>
            </div>
      );
}
