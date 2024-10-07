import Tab from '../../components/Tab'
import { BootstrapIcon } from '../../styles'
import { HeaderStyle, Titulo } from './styles'

const Header = () => (
  <>
    <HeaderStyle>
      <Titulo>
        <BootstrapIcon>&#xF676;</BootstrapIcon>
        lista de contatos
      </Titulo>
    </HeaderStyle>
  </>
)

export default Header
