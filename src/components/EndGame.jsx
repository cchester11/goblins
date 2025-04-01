import { useNavigate } from "react-router-dom";

export default function EndGame() {
      const navigate = useNavigate();
      // when user clicks "start game", route to the "game component"
      return (
            <div className="flex flex-col justify-center items-center h-screen text-center">
                  <p className="mb-10 text-white text-2xl font-bold">
                        Brian has perished! Game Over!
                  </p>
                  <button
                        type="button"
                        className="bg-amber-400 text-2xl text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500 w-48"
                        onClick={() => navigate("/")}
                  >
                        Restart
                  </button>
            </div>
      );
}
