import { useState } from 'react'
import './App.css'
import "tailwindcss/tailwind.css"
import { Routes, Route } from 'react-router'
import Home from './pages/home'
import Favorites from './pages/favorites'
import Details from './pages/details'
import Navbar from './conponents/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar/>
        <Routes>
          <Route 
          path='/'
          element = {<Home/>}/>
          <Route
          path='/favorites'
          element = {<Favorites/>}/>
          <Route 
          path='/recipe-item/:id'
          element = {<Details/>}/>
        </Routes>
      </div>
       
    </>
  )
}

export default App
