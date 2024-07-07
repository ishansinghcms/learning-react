import { useContext } from "react";
import { myContext } from "./context";

export default function Component() {
  const { counter, dispatch } = useContext(myContext);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}
