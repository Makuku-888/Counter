import React from 'react';
import './App.css';
import Counter from './components/Counter';
// import CounterAll from './components/CounterAll';

function App() {
  
  
  return (
    <div className="App">
      <Counter num={0}/>
      <Counter num={10}/>
      <Counter num={20}/>
      {/* <CounterAll /> */}
    </div>
  );
}

export default App;
