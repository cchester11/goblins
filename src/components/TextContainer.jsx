export default function TextContainer ({ gameText }) {
      return (
            <div className="grid grid-cols-1 border-2 border-amber-300 m-3">
                              <div className="flex justify-center items-center text-2xl">
                                    <p>{gameText}</p>
                              </div>
                        </div>
      )
};