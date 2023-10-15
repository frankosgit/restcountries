"use client"
import Navbar from './components/navbar'
import Cards from './components/cards'
import { useState, useEffect } from 'react'
import { DataProvider, useData } from './shared/dataContext'


export default function Home() {


  return (
    <DataProvider>
      <Cards/>
    </DataProvider>
  )
}

