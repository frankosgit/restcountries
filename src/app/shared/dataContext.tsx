// DataContext.tsx
"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode, ProviderProps } from 'react';

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

interface DataContextValue {
  data: CountryType[];
}



export const DataContext = createContext<DataContextValue| undefined>(undefined);

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

const ContextValue: DataContextValue = {
  data,
};  




  return (
    <DataContext.Provider value={ContextValue}>
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
