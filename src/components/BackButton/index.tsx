import { BootstrapIcon } from '../../styles'
import { BackButtonStyle } from './styles'

const BackButton = () => (
  <BackButtonStyle to="/">
    <BootstrapIcon>&#xF423;</BootstrapIcon>
    voltar à página inicial
  </BackButtonStyle>
)

export default BackButton
