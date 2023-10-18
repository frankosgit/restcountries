"use client"
import Navbar from './components/navbar'
import Cards from './components/cards'
import { useState, useEffect } from 'react'
import { DataProvider, useData } from './shared/dataContext'
import Game from './components/game'

const regions = [
  { id: 0, name: 'All regions', unavailable: false },
{ id: 1, name: 'Africa', unavailable: false },
{ id: 2, name: 'Americas', unavailable: false },
{ id: 3, name: 'Asia', unavailable: false },
{ id: 4, name: 'Europe', unavailable: false },
{ id: 5, name: 'Oceania', unavailable: false },
]

export default function Home() {
  const [selectedRegion , setSelectedRegion] = useState(regions[0])
  const [darkMode, setDarkMode] = useState<boolean>(false)


  interface darkModeProps { 
    darkMode: boolean;
    toggleDarkMode: () => void;
  }

 
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Dark mode toggled. New value: ", darkMode);
  }


  return (
      <DataProvider>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleDarkMode={toggleDarkMode}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          regions={regions}
        />

        <Cards 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleDarkMode={toggleDarkMode}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          regions={regions}

        />
  
      </DataProvider>
  )
}

