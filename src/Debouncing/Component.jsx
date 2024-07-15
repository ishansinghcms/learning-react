import { useState, useMemo, useCallback } from 'react';

// const callApi = (e) => {
//   console.log(e.target.value);
// };

// const debounce = (func, wait) => {
//   let timer;
//   return (e) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(e);
//     }, wait);
//   };
// };

export default function Component() {
  const [input, setInput] = useState('');

  const callApi = useCallback((e) => {
    console.log(e.target.value);
  }, []);

  const debounce = useCallback((func, wait) => {
    let timer;
    return (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(e);
      }, wait);
    };
  }, []);

  const debouncedAPI = useMemo(() => debounce(callApi, 500), []);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          debouncedAPI(e);
        }}
      />
    </>
  );
}
