import { useNavigate } from "react-router-dom";

export default function EndGame () {
      const navigate = useNavigate();
      // when user clicks "start game", route to the "game component"
      return (
            <div className="flex justify-center align-middle items-center h-screen w-screen">
                  <div>
                        <div className="w-screen flex justify-center">
                              <p>Brian has perished! Game Over!</p>
                        </div>
                        <button
                              type="button"
                              className="bg-amber-400 text-2xl text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500"
                              onClick={() => navigate('/')}
                        >
                              Restart
                        </button>
                  </div>
            </div>
      );
};