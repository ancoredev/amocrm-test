import { useState } from 'react';

import { Timer } from './components/Timer';
import { InputField } from './components/InputField';

import './App.css';
import { useTimer } from './hooks/useTimer';


function App() {
  const { secondsLeft, startTimer } = useTimer();

  const [ timerValue, setTimerValue ] = useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, '');
    setTimerValue(newValue);
  }

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
