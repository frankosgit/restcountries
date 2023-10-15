import React from 'react'


export default function SingleCountry() {
  return (


    <div className="shadow-xl rounded-b-lg my-2 mx-4 w-1/5">
      <img src="https://flagcdn.com/w320/de.png" alt="germanyflag" className="w-full rounded-t-lg" />
        <div className='ml-8 mt-2'>
            <h1 className="text-3xl font-bold my-2">Germany</h1>
            <h3 className="text-sm my-2">Population: <span className='text-gray-600 italic'>83240525</span>{}</h3>
            <h3 className="text-sm my-2">Region: <span className='text-gray-600 italic'>Europe</span></h3>
            <h3 className="text-sm my-2">Capital: <span className='text-gray-600 italic'>Berlin</span></h3>
        </div>
    </div>
  )
}
