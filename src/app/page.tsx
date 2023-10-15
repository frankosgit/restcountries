"use client"

import { CountryType } from '../../types'
import Navbar from './components/navbar'
import Cards from './components/cards'
import { useState, useEffect } from 'react'


export default function Home() {
    const [data, setData] = useState(null)
    const [selectedCountries, setSelectedCountries] = useState<CountryType[]>([])
  

    useEffect(() => {
      fetch('data.json')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          console.log(data)
        })
    .catch((err) => console.log(err))
  }, []);

//logic for random country selection to display on landing page

const randomNumGen = () : number[]=> {
  let randomNumArray: number[] = [];
  while (randomNumArray.length < 6) {
    const randomNum = Math.floor(Math.random() * 250);
    if (!randomNumArray.includes(randomNum)) {
      randomNumArray.push(randomNum);
    }
  }
  return randomNumArray;
};

    useEffect(() => {
      if (data) {
        let randomNumArray = randomNumGen();
        const selected = randomNumArray.map((num) => data[num]);
        setSelectedCountries((prevSelected) => [...prevSelected, ...selected]);
      }
    }, [data]);
    

  useEffect(() => {
    if (selectedCountries.length > 0) {
      const countryNames = selectedCountries.map((country) => country.name);
      const countryPopulation = selectedCountries.map((country) => country.population);
      console.log("Here are the random country names: " + countryNames + "and here are the populations:" + countryPopulation);
    }
  }, [selectedCountries])


  return (
      <Cards/>
  )
}

