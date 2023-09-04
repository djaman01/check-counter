import { useState } from 'react'

export default function Counter() {

  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);

  const decrease = () => {
    return (counter > 0) ? setCounter(counter - 1) : null;
  }

  const reset = () => setCounter(0);

  return (
    <div className='all-counter'>
      <h1 className="title" style={{color: "white"}}> Counter </h1>
      <h1 className="counter" style={{color: "orange"}}>{counter}</h1>
      <div className="button-div">
        <button onClick={increase}> + </button>
        <button onClick={decrease}> - </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
