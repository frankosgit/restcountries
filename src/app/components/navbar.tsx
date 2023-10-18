"use client"
import { Fragment, use, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SearchComponent from './searchbar'
import { useData } from '../shared/dataContext'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import MyListbox from './listBox'



const navigation = [
  { name: 'Search', href: "", current: false },

]

function classNames(...classes: any[]): any {
  return classes.filter(Boolean).join(' ')
}

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (darkMode: boolean) => void;
}


const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, setDarkMode }) => {
  const [enabled, setEnabled] = useState(false)

  const handleClick = () => {
   
    console.log("Dark mode toggled. New value: ", darkMode);
    setDarkMode(!darkMode);

  }

  return (
    <Disclosure as="nav" className="bg-white shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>


              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mr-auto">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className='text-xl font-mono letter-spacing: 0.05em; '>the countries of the world</h1>
                </div>
              
                <MyListbox/>
                
              
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <SearchComponent />
    
      <Switch.Group>
      <div className="flex items-center ml-8">

      <Switch.Label className="mr-4 font-mono">DarkMode</Switch.Label>

      <Switch
        checked={ darkMode }
        onChange={ setDarkMode }
        className={`${
          darkMode ? 'bg-black' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
      <span className="sr-only">Darkmode</span>
      <span
        className={`${
          darkMode ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
    </div>

    </Switch.Group>

              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar