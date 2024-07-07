import { useCallback, useEffect, useState } from "react";

export default function Component() {
  const [state, setState] = useState(0);

  const func = useCallback(() => {
    console.log(state);
  }, []);

  useEffect(() => {
    console.log("func changed");
  }, [func]);

  const handleClick = () => {
    setState((prevState) => prevState + 1);
  };

  return <button onClick={handleClick}>re-render</button>;
}
