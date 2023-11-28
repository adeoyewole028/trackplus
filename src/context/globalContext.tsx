import React, { createContext, useContext, useState, useEffect } from "react";
import { countries } from "../mock";
import { CountryType } from "../type";

interface GlobalContextProps {
  // Define your global state properties here
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  token: string | null; // New property for the auth token
  setAuthToken: React.Dispatch<React.SetStateAction<string | null>>;
  sortCountry: CountryType[];
}

const GlobalContext = createContext<GlobalContextProps | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);
  const [token, setAuthToken] = useState<string | null>(null);

  const [sortCountry, setSortCountry] = useState<CountryType[]>([]);

  useEffect(() => {
    setSortCountry(
      countries
        .sort((a, b) => (a.phone > b.phone ? 1 : -1))
        .filter((item, index, array) => {
          return (
            index ===
            array.findIndex((t) => {
              return t.phone === item.phone;
            })
          );
        })
    );
  }, []);

  return (
    <GlobalContext.Provider
      value={{ count, setCount, token, setAuthToken, sortCountry }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
