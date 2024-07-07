import { createContext } from "react";

export const myContext = createContext({
  counter: 9999,
  dispatch: () => {},
});
