import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { action, comadey, HorrorMovies, originals, RomanceMovies, Documentaries } from './Components/Urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/Rowpost/RowPost'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' issmall />
      <RowPost url={comadey} title='ComedyMovies' issmall />
      <RowPost url={HorrorMovies} title='HorrorMovies' issmall />
      <RowPost url={RomanceMovies} title='RomanceMovies' issmall />
      <RowPost url={Documentaries} title='Documentaries' issmall />
    </div>
  )
}

export default App
