import React, { useState, createContext, useContext, ReactNode } from "react";

interface ContextProps {
  year: [number, number];
  setYear: (year: [number, number]) => void;
  rating: [number, number];
  setRating: (rating: [number, number]) => void;
  genreList: string[];
  setGenreList: (genreList: string[]) => void;
  openGenreList: boolean;
  toggleGenreList: () => void;
  idFavorites: number[];
  setIdFavorites: (idFavorites: number[]) => void;
}

const Context = createContext<ContextProps | undefined>(undefined);

export const useContextProvider = (): ContextProps => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContextProvider must be used within a ContextProvider");
  }
  return context;
};

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [year, setYear] = useState<[number, number]>([1990, 2024]);
  const [rating, setRating] = useState<[number, number]>([0, 10]);
  const [genreList, setGenreList] = useState<string[]>([]);
  const [openGenreList, setOpenGenreList] = useState<boolean>(false);
  const [idFavorites, setIdFavorites] = useState<number[]>([5637342, 5609795]);

  const toggleGenreList = () => {
    setOpenGenreList(!openGenreList);
  };

  return (
    <Context.Provider
      value={{
        year,
        setYear,
        rating,
        setRating,
        genreList,
        setGenreList,
        openGenreList,
        toggleGenreList,
        idFavorites,
        setIdFavorites,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
