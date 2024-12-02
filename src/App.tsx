import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={()=>setCount(count+1)} className='bg-blue-500 rounded p-5 text-center'>Hello {count}</button>
    </>
  );
}

export default App
