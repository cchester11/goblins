// import Brians state and pass as props
export default function BrianContainer({brian}) {
      console.log(brian)

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
                  <div className="flex justify-center">Health: {brian.health}</div>
            </div>
      );
}
