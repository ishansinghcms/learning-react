import { useState } from "react";
import { myContext } from "./context";

export default function Provider({ children }) {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <myContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </myContext.Provider>
  );
}
