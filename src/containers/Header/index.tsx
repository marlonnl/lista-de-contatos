import Tab from '../../components/Tab'
import { BuscarInput, CampoBusca, HeaderStyle, Tabs, Titulo } from './styles'

const Header = () => (
  <>
    <HeaderStyle>
      <Titulo>📇 lista de contatos</Titulo>
      <CampoBusca>
        <BuscarInput type="text" name="" id="" placeholder="pesquisar" />
        <i className="bi bi-search"></i>
      </CampoBusca>

      <Tabs>
        <Tab label={'star'} fav={true} ativo={false}></Tab>
        <Tab label={'todos'} ativo={true}></Tab>
        <Tab label={'familia'} ativo={false}></Tab>
        <Tab label={'amigos'} ativo={false}></Tab>
        <Tab label={'trabalho'} ativo={false}></Tab>
      </Tabs>
    </HeaderStyle>
  </>
)

export default Header
