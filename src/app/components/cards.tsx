  "use client"

  import { useState, useEffect, useContext } from 'react'
  import { useData } from '../shared/dataContext'
  import { motion } from "framer-motion"


  interface CardsProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    setDarkMode: (darkMode: boolean) => void;
  }

  const Cards: React.FC<CardsProps> = ({ darkMode, toggleDarkMode, setDarkMode }) => {
    const { data } = useData()
    const [selectedCountries, setSelectedCountries] = useState<CountryType[]>([])


      interface CountryType {
          name: string;
          population: number;
          region: string;
          capital: string;
          flag: string;
          alpha3Code: string;
      }
      


  

      
      const randomNumGen = () : number[]=> {
          let randomNumArray: number[] = [];
          while (randomNumArray.length < 8) {
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
            setSelectedCountries((prevSelected) => [
              ...prevSelected,
              ...selected.filter((country) => country !== null) as CountryType[]
            ]);
          }
        }, [data]);
            
        
          useEffect(() => {
            if (selectedCountries.length > 0) {
              const countryNames = selectedCountries.map((country) => country.name);
              const countryPopulation = selectedCountries.map((country) => country.population);
              console.log("Here are the random country names: " + countryNames + "and here are the populations:" + countryPopulation);
            }
          }, [selectedCountries])
          

   
          
          
          {` ${darkMode ? 'text-white' : 'text-black'}`}
    return (
      
      
      <div className={`flex flex-wrap justify-between font-mono px-10 pb-20 py-4 ;
      ;
      ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>

      {selectedCountries.map((country, index) => (
        <motion.div animate={{y: 50}} key={country.alpha3Code} className={`shadow-xl rounded-b-lg my-2 mx-4 w-1/5 ${darkMode ? 'bg-black' : 'bg-white'}`}>
          <img src={country.flag} alt="" className="rounded-t-lg h-1/2 w-full h-2/5 object-cover rounded-b-lg" />
          <div className='ml-8 mt-2 flex flex-col'>
            <h1 className= {`text-3xl font-bold my-2 font-mono ${darkMode ? 'text-white' : 'text-black'}`}>{country.name}</h1>
            <h3 className={`text-xl my-2 font-mono ${darkMode ? 'text-white' : 'text-black'}`}>Population:<span className={`text-lg italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{country.population}</span></h3>
            <h3 className={`text-xl my-2 font-mono ${darkMode ? 'text-white' : 'text-black'}`}>Region:<span className={`text-lg italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{country.region}</span></h3>
            <h3 className={`text-xl my-2 font-mono ${darkMode ? 'text-white' : 'text-black'}`}>Capital:<span className={`text-lg italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{country.capital}</span></h3>
          </div>
        </motion.div>
      ))}
      </div>
      )
  }

  export default Cards