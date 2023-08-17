export type TUseTimer = () => {
  secondsLeft: number,
  isRunning: boolean,
  startTimer: (initialValue: number | string) => void
}
