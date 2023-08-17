import { FC } from 'react'

import { formatTimer } from '../utils'


interface TimerProps {
  value: number
}

export const Timer: FC<TimerProps> = ({value}) => {
  return (
    <div className="timer">
      { 
        // используем свою функцию для отображения в нужном формате
        value === 0 ? "hh:mm:ss" : formatTimer(value)
      }
    </div>
  )
}
