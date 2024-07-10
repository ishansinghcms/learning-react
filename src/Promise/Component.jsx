export default function Component() {
  function promiseHandler() {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    console.log(promise);
    return { resolve, reject, promise };
  }

  const p = promiseHandler();

  function handleClick() {
    p.resolve("value");
    console.log(p.promise);
  }

  return <button onClick={handleClick}>resolve</button>;
}
