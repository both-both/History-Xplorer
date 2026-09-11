import type React from "react";

export type DateContextProps = {
  date: string;
  month: number;
  day: number;
  since: string;
  setDate: (date: string) => void;
  setSince: (since: string) => void;
};

export type ProviderProps = {
  children: React.ReactNode;
};
