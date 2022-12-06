import { useState } from 'react'

function UseStateCounter() {
  const [value, setValue] = useState(0);

  const delayedIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1)// will not increment value correclty if clicked multiple times in quick successions
      setValue((prevValue) => prevValue + 1);
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0'}}>
          <h2>Regular counter</h2>
          <h1>{value}</h1>
          <button className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
          <button className="btn" onClick={() => setValue(0)}>Reset</button>
          <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
      </section>
      <hr />
      <section style={{ margin: '4rem 0'}}>
          <h2>More complex counter</h2>
          <h1>{value}</h1>
          <button className="btn" onClick={delayedIncrease}>Increase After 2 sec.</button>
      </section>
    </>
  )
}

export default UseStateCounter