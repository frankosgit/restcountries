"use client"

import React, { use } from 'react'
import { useState, useEffect, useContext } from 'react'
import { DataProvider, useData } from '../shared/dataContext'




export default function Cards() {
    interface CountryType {
        name: string;
        population: number;
        region: string;
        capital: string;
        flag: string;
        alpha3Code: string;
    }
    
    const data = useData()
    const [selectedCountries, setSelectedCountries] = useState<CountryType[]>([])
/*
    useEffect(() => {
        if (data) {
          data.forEach((country) => {
            console.log("Country Name: " + country.name);
            console.log("Population: " + country.population);
            console.log("Region: " + country.region);
            console.log("Capital: " + country.capital);
            console.log("Flag URL: " + country.flag);
            console.log("Alpha3Code: " + country.alpha3Code);
          });
        }
      }, [data]);
      
      */
      
      
      

    
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
          const selected = randomNumArray.map((num) => {
            if (data[num]) {  
              return data[num];
            }
            return null; 
          });
          setSelectedCountries((prevSelected) => [...prevSelected, ...selected.filter(Boolean)]);
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
    <div className='flex flex-wrap justify-between'>
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
