import { createContext, useContext, useState } from "react";

import type { DateContextProps, ProviderProps } from "./useDate.types";

const today = new Date();
const initialDate = `${today.getFullYear()}-${String(
  today.getMonth() + 1,
).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

export const DataContext = createContext<DateContextProps>({
  date: initialDate,
  month: today.getMonth() + 1,
  day: today.getDate(),
  since: "1900",
  setSince: () => {},
  setDate: () => {},
});

export const DateContextProvider = ({ children }: ProviderProps) => {
  const [date, setDate] = useState(initialDate);
  const [since, setSince] = useState("1900");
  const [, month, day] = date.split("-");

  return (
    <DataContext.Provider
      value={{
        date,
        month: Number(month),
        day: Number(day),
        since,
        setDate,
        setSince,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDate = () => {
  return useContext(DataContext);
};
