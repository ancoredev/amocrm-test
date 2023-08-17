import { useState } from 'react';

import { Timer } from './components/Timer';
import { InputField } from './components/InputField';

import './App.css';
import { useTimer } from './hooks/useTimer';


function App() {
  // Используем кастомный хук для таймера. Упрощенная версия, только один контроллер - для старта (по заданию)
  // Таймер работает с неотформатированными секундами, форматирование происходит на уровне представления в компоненте Timer
  const { secondsLeft, startTimer } = useTimer();

  const [ timerValue, setTimerValue ] = useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // Вырезаем из ввода все, кроме цифр
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
