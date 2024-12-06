import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1 className='text-5xl text-orange-500 font-bold font-robert-medium text-violet-300'>Welcome to Awards</h1>
   </main>
  );
}

export default App
