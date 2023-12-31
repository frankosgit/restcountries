
import { Listbox, Transition } from '@headlessui/react'
import { useState } from 'react'


interface regionProps {
    selectedRegion: {
        id: number;
        name: string;
        unavailable: boolean;
    };
      setSelectedRegion: (selectedRegion: {
        id: number;
        name: string;
        unavailable: boolean;
    }) => void;
    regions: {
        id: number;
        name: string;
        unavailable: boolean;
    }[];
}

export default function MyListbox( {regions, selectedRegion, setSelectedRegion}: regionProps) {



  return (
    <Listbox value={selectedRegion} onChange={setSelectedRegion}>
        <div className='relative inline-block text-center font-mono ml-20'>
        <div>   
        <span className="rounded-md shadow-sm">
      <Listbox.Button className="py-2 px-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 focus:z-10 sm:text-sm">{selectedRegion ? selectedRegion.name : 'Select a region'}</Listbox.Button>
      <Transition
          as="div"
          className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-20"
          enter="transform transition duration-100 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transform transition duration-75 ease-out"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
      >
      <Listbox.Options className="py-1 z-10" static>
        {regions.map((region) => (
          <Listbox.Option
            key={region.id}
            value={region}
            disabled={region.unavailable}
          >
            {region.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
      </Transition>
      </span>
      </div>
      </div>
    </Listbox>
  )
}