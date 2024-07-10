import { useState, useMemo, useRef } from "react";

export default function Component() {
  const [state, setState] = useState({ a: 1, b: 1 });
  const formRef = useRef();
  function expensive(a, b) {
    console.log("expensive function called");
    return a + b;
  }
  const result = useMemo(() => {
    expensive(state.a, state.b);
  }, [state.a, state.b]);

  function handleClick() {
    setState({ a: formRef.current.num1.value, b: formRef.current.num2.value });
  }

  return (
    <>
      <form ref={formRef}>
        <input type="number" name="num1" />
        <input type="number" name="num2" />
        <button type="button" onClick={handleClick}>
          submit
        </button>
      </form>
    </>
  );
}
