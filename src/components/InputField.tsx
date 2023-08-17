import { FC } from "react"


interface InputFieldProps {
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onClick: (initialValue: number | string) => void
}

export const InputField: FC<InputFieldProps> = ({
  value,
  onChange,
  onClick
}) => {
  return (
    <>
      <input type="text" placeholder="Seconds" value={value} onChange={onChange}/>
      <button name="start" onClick={() => onClick(value)}>Start</button>
    </>
  )
}
