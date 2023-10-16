"use client"

import React, { use } from 'react'
import { useState, useEffect } from 'react'
import { DataProvider, useData } from '../shared/dataContext'

export default function Game() {

    const [gameCountries, setGameCountries] = useState<CountryType[]>([])
    const [score, setScore] = useState<number>(0)
    const [gameOver, setGameOver] = useState<boolean>(false)
    const [lives, setLives] = useState<number>(3)
    const [revealPopulation, setRevealPopulation] = useState<boolean>(  )
    const data = useData()

        //logic for random country selection to display on game page
  const randomGameNumGen = () : number[]=> {
    let randomNumArray: number[] = [];
    while (randomNumArray.length < 2) {
      const randomNum = Math.floor(Math.random() * 250);
      if (!randomNumArray.includes(randomNum)) {
        randomNumArray.push(randomNum);
      }
    }
    return randomNumArray;
  };



  useEffect(() => {
    if (data.length > 0) {
      const randomNumArray = randomGameNumGen();
      const selected = randomNumArray.map((num) => data[num]);
      const filteredSelected = selected.filter((item) => item !== null);
    
    setGameCountries((prevSelected) => [...prevSelected, ...filteredSelected]);
    }

  }, [data]);


  
  const handleButtonClick = (selectedCountry: CountryType) => {
    console.log(selectedCountry)
    if (lives === 1) {
      setGameOver(true);
    } else {
    if (gameCountries.length >= 2) {
      const firstCountry = gameCountries[0];
      const secondCountry = gameCountries[1];
  
      if (selectedCountry === firstCountry) {
    
          if (selectedCountry.population > secondCountry.population) {
            // User guessed correctly
            setScore(score + 1);
          } else {
            // User guessed incorrectly
            setLives(lives - 1);
          } 
          } else {

            if (selectedCountry.population > firstCountry.population) {
              // User guessed correctly
              setScore(score + 1);
            } else {
              // User guessed incorrectly
              setLives(lives - 1);
            }
          }
        
      
      setRevealPopulation(true);

    }
  }}  


  const refreshCountries = () => {
   setGameCountries(gameCountries.splice(0, 2))
    const randomNumArray = randomGameNumGen(); // Function to generate two random numbers
    const newCountries = randomNumArray.map((num) => data[num]);
    setGameCountries(newCountries);
    setRevealPopulation(false);
  };

 
return (
  <div>
    { gameOver ? (
    <h1 className='text-3xl mt-4'>Game Over</h1>
    )  : (
    <>
      <h1 className='text-4xl text-center mt-10'>Which of the following countries have the larger population?</h1>
    <div className='flex my-20 mb-40'>
         {gameCountries.map((country, index) => (
          <div onClick={() => handleButtonClick(country)} className="shadow-xl rounded-b-lg my-2 mx-4 w-1/5">
          <img src={country.flag} alt="germanyflag" className="w-full rounded-t-lg" />
              <div className='ml-8 mt-2'>
                  <h1 className="text-3xl font-bold my-2">{country.name}</h1>
                  <h3 className="text-sm my-2">Population: <span className='text-gray-600 italic'>{revealPopulation ? country.population : "?"}</span>{}</h3>
                  <h3 className="text-sm my-2">Region: <span className='text-gray-600 italic'>{country.region}</span></h3>
                  <h3 className="text-sm my-2">Capital: <span className='text-gray-600 italic'>{country.capital}</span></h3>
              </div>
          </div>
            ))}
        <div className='flex flex-col mt-20 ml-20'>
            <h1 className='text-3xl mt-8 ml-20'>Score: {score}</h1>
            <h1 className='text-3xl mt-8 ml-20'>Lives: {lives}</h1>

        </div>

        <div className='flex flex-col mt-20 ml-40'>
        <button 
            onClick={refreshCountries}
          className="mt-20 bg-blue-500 hover:bg-blue-700 text-white mx-10 my-10 font-bold py-2 px-4 rounded">Go again
          </button>
 
        </div>
    </div>
    </> 
  )}
  </div>
  
)}

