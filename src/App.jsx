import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  // set the global state of characters to be passed down to game component
  let [brian, setBrian] = useState({
    health: 100,
    strength: 10
  })
  let [goblin, setGoblin] = useState({
    health: 0,
    strength: 0
  })

  // when user clicks "start game", route to the "game component"
  return (
    <div className='flex justify-center align-middle items-center h-screen w-screen'>
      <div>
        <button type="button" className='bg-amber-400 text-2xl text-white hover:bg-amber-200 p-3 rounded-xl outline-2 outline-offset-2 outline-blue-500'>
          Start Game
        </button>
      </div>
    </div>
  )
}

export default App
