export type TUseTimer = (initialValue: number) => {
  secondsLeft: number,
  isRunning: boolean,
  startTimer: () => void
}
