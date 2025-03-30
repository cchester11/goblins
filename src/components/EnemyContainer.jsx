export default function EnemyContainer({ goblin }) {
      console.log(goblin)

      return (
            <div className="grid grid-cols-1 border-2 border-amber-300 m-3">
                  <div className="flex justify-center">{goblin.name || "Goblin Name"}</div>
                  <div className="flex justify-center">
                        <img
                              src={goblin.image || "/goblin_1.png"}
                              alt="goblin"
                              className="h-[60px] w-[60px]"
                        />
                  </div>
                  <div className="flex justify-center">Goblin Health: {goblin.health}</div>
            </div>
      );
}
