import Image from 'next/image'
import Navbar from './navigation/page'
import Searchbar from './searchbar/page'
import Cards from './cards/page'

export default function Home() {
  return (
    <>
      <Navbar /> 
      <Cards />
    </>
  )
}
