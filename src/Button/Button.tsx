import s from "./button.module.css"

type Props = {
  onClick?: (e: any) => void
}

const Button: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.button}>
      Valider
    </button>
  )
}

export default Button
