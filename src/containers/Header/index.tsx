import { BootstrapIcon } from '../../styles'
import { HeaderStyle, MenuBar, MenuBarItem, Titulo } from './styles'

const Header = () => (
  <>
    <HeaderStyle>
      <Titulo>lista de contatos</Titulo>

      {/* <MenuBar>
        <MenuBarItem to={'/'}>
          <BootstrapIcon>&#xF378;</BootstrapIcon>
          sobre
        </MenuBarItem>

        <MenuBarItem to={'/'}>
          <BootstrapIcon>&#xF504;</BootstrapIcon>
          ajuda
        </MenuBarItem>
      </MenuBar> */}
    </HeaderStyle>
  </>
)

export default Header
