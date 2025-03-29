import { useNavigate } from "react-router-dom";

export default function Game() {
      const navigate = useNavigate();

      return (
            <div>
                  <div className="ml-4 mb-4 mt-4">
                        <button
                              type="button"
                              className="bg-amber-400 text-sm text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500"
                              onClick={() => navigate("/")}
                        >
                              Home
                        </button>
                  </div>
                  <div className="h-screen w-screen grid grid-cols-1">
                        {/* enemy container */}
                        <div>Goblin</div>
                        {/* brian container */}
                        <div>Brian</div>
                  </div>
            </div>
      );
}
