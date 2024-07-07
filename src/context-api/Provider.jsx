import { useReducer } from "react";
import { myContext } from "./context";

function reducerFunction(counter, action) {
  switch (action.type) {
    case "increment": {
      return counter + 1;
    }
    case "decrement": {
      return counter - 1;
    }
  }
}

export default function Provider({ children }) {
  const [counter, dispatch] = useReducer(reducerFunction, 0);
  return (
    <myContext.Provider value={{ counter, dispatch }}>
      {children}
    </myContext.Provider>
  );
}
