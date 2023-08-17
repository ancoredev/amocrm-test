import { FC } from 'react'

import { timeFormater } from '../utils'


interface TimerProps {
  value: number
}

export const Timer: FC<TimerProps> = ({value}) => {


  return (
    <div className="timer">
      { 
        value === 0 ? "hh:mm:ss" : timeFormater(value)
      }
    </div>
  )
}
