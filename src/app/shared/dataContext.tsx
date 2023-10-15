// DataContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface Data {
  // Define your data structure here
}

interface DataContextProps {
  children: ReactNode;
}

const DataContext = createContext<Data | undefined>(undefined);

export function DataProvider({ children }: DataContextProps) {
  const [data, setData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    // Make your API call and set the data
  }, []); // Fetch data on component mount

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
