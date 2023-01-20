import { HeaderContainer, HeaderContent, NewButton } from "./styles";
import logoImg from '../../assets/logo.svg'


export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewButton>Nova transação</NewButton>
      </HeaderContent>
    </HeaderContainer>
  )
}