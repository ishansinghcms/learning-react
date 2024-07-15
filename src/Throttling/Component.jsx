import classes from './style.module.css';
import { useState, useCallback } from 'react';

// const throttle = (func, delay) => {
//   let timer = null;
//   return () => {
//     if (timer) return;
//     timer = setTimeout(() => {
//       timer = null;
//       func();
//     }, delay);
//   };
// };

export default function Component() {
  const [count, setCount] = useState(0);

  const moveHandler = () => {
    setCount((prev) => prev + 1);
  };

  const throttle = useCallback((func, delay) => {
    let timer = null;
    return () => {
      if (timer) return;
      timer = setTimeout(() => {
        timer = null;
        func();
      }, delay);
    };
  }, []);

  const throttledFunc = useCallback(throttle(moveHandler, 100), []);

  return (
    <div className={classes.container} onMouseMove={throttledFunc}>
      {count}
    </div>
  );
}
