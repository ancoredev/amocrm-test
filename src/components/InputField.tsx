import { FC } from "react"


interface InputFieldProps {
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onClick: () => void
}

export const InputField: FC<InputFieldProps> = ({
  value,
  onChange,
  onClick
}) => {
  return (
    <>
      <input type="text" placeholder="Seconds" value={value} onChange={onChange}/>
      <button name="start" onClick={onClick}>Start</button>
    </>
  )
}
