import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCountHandler = () => {
        setCount(count + 1);
  }

  const decreaseCountHandler = () => {
        if (count > 0) {
              setCount(count - 1);
        }
  }

  return (
    <div className='container'>
      <div className='title'>CounterProgram</div>
      <div className='count'>{count}</div>
      <div className='buttons'>
      <button onClick={increaseCountHandler}>+</button>
      <button onClick={decreaseCountHandler}>-</button>
      </div>
    </div>
  );
}

export default App;
