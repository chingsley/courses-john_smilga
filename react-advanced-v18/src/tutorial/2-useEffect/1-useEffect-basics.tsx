import { useState, useEffect } from 'react'

function UseEffectBasics() {
  const [value, setValue] = useState(0);

  // runs on every render
  useEffect(() => {
    console.log('call useEffect');
  });

  // runs only on initial render (b/c dependency list is empty)
  useEffect(() => {
    document.title = 'react-advanced-v18';
  }, []);


    // runs only when the "value" state changes
    useEffect(() => {
      document.title = `New Message(${value})`;
      if(value > 5) console.log({ value })
    }, [value]);

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>increase</button>
    </>
  )
}

export default UseEffectBasics