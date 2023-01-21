import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewButton } from './styles'
import logoImg from '../../assets/logo.svg'
import { NewModal } from '../Modal'


export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewButton>Nova transação</NewButton>
          </Dialog.Trigger>

          <NewModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
