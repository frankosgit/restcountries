import React from 'react'
import { useState, useEffect } from 'react'


export default function Game() {
/*
    const [gameCountries, setGameCountries] = useState<CountryType[]>([])
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
  */

/*
  useEffect(() => {
    if (data) {
      let randomNumArray = randomGameNumGen();
      const selected = randomNumArray.map((num) => data[num]);
      setGameCountries((prevSelected) => [...prevSelected, ...selected]);
    }
  }, [data]);

  useEffect(() => {
    if (gameCountries.length > 0) {
      const countryPopulation = gameCountries.map((country) => country.population);
      const countryNames = gameCountries.map((country) => country.name);
      console.log("Here are the random country names: " + countryNames + "and here are the populations:" + countryPopulation);
    }
  }, [selectedCountries])
*/
      
  return (
    <div>
        <div className="shadow-xl rounded-b-lg my-2 mx-4 w-1/5">
        <img src="https://flagcdn.com/w320/de.png" alt="germanyflag" className="w-full rounded-t-lg" />
            <div className='ml-8 mt-2'>
                <h1 className="text-3xl font-bold my-2">Germany</h1>
                <h3 className="text-sm my-2">Population: <span className='text-gray-600 italic'>83240525</span>{}</h3>
                <h3 className="text-sm my-2">Region: <span className='text-gray-600 italic'>Europe</span></h3>
                <h3 className="text-sm my-2">Capital: <span className='text-gray-600 italic'>Berlin</span></h3>
            </div>
        </div>
        <div className="shadow-xl rounded-b-lg my-2 mx-4 w-1/5">
        <img src="https://flagcdn.com/w320/de.png" alt="germanyflag" className="w-full rounded-t-lg" />
        <div className='ml-8 mt-2'>
            <h1 className="text-3xl font-bold my-2">Germany</h1>
            <h3 className="text-sm my-2">Population: <span className='text-gray-600 italic'>83240525</span>{}</h3>
            <h3 className="text-sm my-2">Region: <span className='text-gray-600 italic'>Europe</span></h3>
            <h3 className="text-sm my-2">Capital: <span className='text-gray-600 italic'>Berlin</span></h3>
        </div>
    </div>
  </div>
  )
}
