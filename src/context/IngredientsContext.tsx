"use client";
import { IIngredients } from "@/types/common";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  Children,
} from "react";
//type TypeSetState<T> = Dispatch<SetStateAction<T>>;
interface IContext {
  userChoice: {};
  setUserChoice: Dispatch<SetStateAction<{}>>;
}
export const IngredientsContext = createContext<IContext>({
  userChoice: {},
  setUserChoice: () => {},
});

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [userChoice, setUserChoice] = useState({});
  const value = useMemo(
    () => ({ userChoice, setUserChoice }),
    [userChoice, setUserChoice]
  );

  return (
    <IngredientsContext.Provider value={value}>
      {children}
    </IngredientsContext.Provider>
  );
};
