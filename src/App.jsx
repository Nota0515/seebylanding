import { Routes, Route } from 'react-router';
import Home from "@/pages/Home";

function App() {

  return (
    <>
      <div className='w-screen min-h-[100dvh] bg-gradient-radial from-black via-black to-blue-600/10'>
        <Routes>
          <Route path='/' element={
            <Home />
          } />
        </Routes>
      </div>
    </>
  )
}

export default App
