import { useState } from 'react';

import { Timer } from './components/Timer';
import { InputField } from './components/InputField';

import './App.css';
import { useTimer } from './hooks/useTimer';


function App() {
  const [ timerValue, setTimerValue ] = useState('0');
  const { secondsLeft, isRunning, startTimer } = useTimer(parseInt(timerValue));
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setTimerValue(e.target.value);


  return (
    <div className="App">
      <InputField value={timerValue} onChange={handleChange} onClick={startTimer}/>
      <br />
      <br />
      <Timer value={secondsLeft}/>
    </div>
  );
}

export default App;
