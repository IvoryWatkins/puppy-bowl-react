//import { useState } from 'react'
import Navbar from './Components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Components/Homepage'
import AllPlayers from './Components/AllPlayers'
import NewPlayerForm from './Components/NewPlayerForm'
import SinglePlayer from './Components/SinglePlayer'
import './App.css'


function App() {

  return (
    <>
    <Navbar />
    <main>

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/allplayers' element={<AllPlayers/>} />
        <Route path='/player' element={<SinglePlayer/>} />
        <Route path='/form' element={<NewPlayerForm/>} />
      </Routes>

    </main>
    </>
  )
}

export default App
