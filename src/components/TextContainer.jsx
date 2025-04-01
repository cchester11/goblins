export default function TextContainer({ gameText }) {
      return (
            <div className="border-2 border-amber-300 bg-gray-800 text-white rounded-xl p-5 shadow-lg m-3">
                  <div className="flex justify-center items-center text-2xl text-center">
                        <p>{gameText}</p>
                  </div>
            </div>
      );
}
