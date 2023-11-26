import s from "./input.module.css"

type Props = {
  type: string
}

const Input: React.FC<Props> = ({ type }) => {
  return <input className={s.formInput} type={type} />
}

export default Input
