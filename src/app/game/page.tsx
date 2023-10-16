"use client"

import React from 'react'
import Game from '../components/game'
import { DataProvider, useData } from '../shared/dataContext'

export default function GamePage() {
  return (
    <DataProvider>
      <div>
        <Game/>
      </div>
    </DataProvider>
  )
}
