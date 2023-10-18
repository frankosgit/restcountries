"use client"
import Navbar from './components/navbar'
import Cards from './components/cards'
import { useState, useEffect } from 'react'
import { DataProvider, useData } from './shared/dataContext'
import Game from './components/game'


export default function Home() {

  interface darkModeProps { 
    darkMode: boolean;
    toggleDarkMode: () => void;
  }


  const [darkMode, setDarkMode] = useState<boolean>(false)
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
        />

        <Cards 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
  
      </DataProvider>
  )
}

