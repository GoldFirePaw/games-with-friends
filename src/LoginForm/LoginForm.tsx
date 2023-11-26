import Input from "../Input/Input"
import Button from "../Button/Button"
import s from "./loginForm.module.css"

export const LoginForm = () => {
  const handleClick = (e: any) => {
    e.preventDefault()
    console.log("oui")
  }
  return (
    <form className={s.loginForm}>
      <Input type="email" />
      <Input type="password" />
      <Button onClick={(e) => handleClick(e)} />
    </form>
  )
}
