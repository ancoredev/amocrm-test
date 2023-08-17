export const formatTimer: (seconds: number) => string = (seconds) => {
  let hh: string = checkForDigit((Math.floor(seconds/3600)).toString());
  let mm: string = checkForDigit(Math.floor((seconds % 3600)/60).toString());
  let ss: string = checkForDigit((seconds % 60).toString());
  return [hh, mm, ss].join(':');
}

export const checkForDigit: (digit: string) => string = (digit) =>{
  if ( digit.length === 2 ) {
    return digit
  } else {
    return '0' + digit
  }
}