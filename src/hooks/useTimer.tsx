import { useState, useEffect } from 'react'
import { TUseTimer } from '../types'


export const useTimer: TUseTimer = (initialValue) => {
  const [ isRunning, setRunning ] = useState(false);
  const [ secondsLeft, setSecondsLeft ] = useState(0);

  const startTimer = () => {
    setRunning(true);
    setSecondsLeft(initialValue);
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
