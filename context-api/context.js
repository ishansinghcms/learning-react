import { createContext } from "react";

export const myContext = createContext({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});
