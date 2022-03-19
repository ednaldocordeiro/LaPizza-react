import { ButtonClick } from './style'

interface buttonProp{
  text: string
}

export default function Button({text}: buttonProp){

  return (
  <ButtonClick id="button">
    {text}
  </ButtonClick>
  )
}
