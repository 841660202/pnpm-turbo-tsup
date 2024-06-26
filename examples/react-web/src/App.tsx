import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { add, AddParams, AddOp, mul, MulOp, MulParams, sub, SubOp, SubParams } from 'add';
// import { add, AddParams, AddOp } from 'add';
// import { mul, MulParams, MulOp } from 'mul';
// import { sub, SubParams, SubOp } from 'sub';
function App() {
  const [count, setCount] = useState(0);

  const data0: AddParams[] = [
    { value: 1, type: 'add' },
    { value: 2, type: 'add' },
  ];
  const mul0: MulParams[] = [
    { value: 1, type: 'mul' },
    { value: 2, type: 'mul' },
  ];
  const sub0: SubParams[] = [
    { value: 1, type: 'sub' },
    { value: 2, type: 'sub' },
  ];
  const addValue = add(data0[0], data0[1]);
  const mulValue = mul(mul0[0], mul0[1]);
  const subValue = sub(sub0[0], sub0[1]);
  return (
    <>
      <div>
        <p>计算结果：</p>
        <p>
          add：{addValue}, OP enum: {AddOp['add']}
        </p>
        <p>
          sub：{subValue}, OP enum: {SubOp['add']}
        </p>
        <p>
          mul：{mulValue}, OP enum: {MulOp['add']}
        </p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
