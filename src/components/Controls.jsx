export default function Controls() {
      return (
            <div className="grid grid-cols-2 border-2 border-amber-300 m-3 justify-between items-center align-middle">
                  <div className="flex justify-center">
                        <button
                              type="button"
                              className="bg-amber-400 text-sm text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500"
                        >
                              Attack
                        </button>
                  </div>
                  <div className="flex justify-center">
                        <button
                              type="button"
                              className="bg-amber-400 text-sm text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500"
                        >
                              Potion
                        </button>
                  </div>
            </div>
      );
}
