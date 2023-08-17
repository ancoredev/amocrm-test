import { useState, useEffect } from 'react'


type TUseTimer = () => {
  secondsLeft: number,
  isRunning: boolean,
  startTimer: (initialValue: number | string) => void
}

export const useTimer: TUseTimer = () => {
  const [ isRunning, setRunning ] = useState(false);
  const [ secondsLeft, setSecondsLeft ] = useState(0);

  const startTimer: (initialValue: number | string) => void = (initialValue) => {
    setRunning(true);
    typeof initialValue === 'number' 
      ? setSecondsLeft(initialValue)
      : setSecondsLeft(parseInt(initialValue))
  }
  const stopTimer = () => setRunning(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (!isRunning) return
      if ( secondsLeft === 0 ) {
        stopTimer();
      } else {
        setSecondsLeft(secondsLeft => secondsLeft - 1);
      }
    }, 1000)
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  return {
    secondsLeft,
    isRunning,
    startTimer
  }
}
