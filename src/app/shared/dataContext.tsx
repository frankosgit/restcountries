// DataContext.tsx

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface CountryType {
        name: string;
        population: number;
        region: string;
        capital: string;
        flag: string;
        alpha3Code: string;
}

interface DataContextProps {
  children: ReactNode;
}

const DataContext = createContext<CountryType[] | undefined>(undefined);

export function DataProvider({ children }: DataContextProps) {
    const [data, setData] = useState<CountryType[]>([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)

      })
  .catch((err) => console.log(err))
}, []);




  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
