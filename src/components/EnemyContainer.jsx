export default function EnemyContainer() {
      return (
            <div className="grid grid-cols-1 border-2 border-amber-300 m-3">
                  <div className="flex justify-center">Goblin Name</div>
                  <div className="flex justify-center">
                        <img
                              src="/goblin_1.png"
                              alt="goblin"
                              className="h-[60px] w-[60px]"
                        />
                  </div>
                  <div className="flex justify-center">Goblin Health</div>
            </div>
      );
}
