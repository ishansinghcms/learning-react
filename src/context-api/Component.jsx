import { useContext } from "react";
import { myContext } from "./context";

export default function Component() {
  const { counter, increment, decrement } = useContext(myContext);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
