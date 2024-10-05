import Tab from '../../components/Tab'
import { BuscarInput, CampoBusca, Tabs, Titulo } from './styles'

const Header = () => (
  <>
    <Titulo>📇 lista de contatos</Titulo>
    <CampoBusca>
      <BuscarInput type="text" name="" id="" placeholder="pesquisar" />
      <i className="bi bi-search"></i>
    </CampoBusca>

    <Tabs>
      <Tab label={'star'} fav={true}></Tab>
      <Tab label={'todos'}></Tab>
      <Tab label={'familia'}></Tab>
      <Tab label={'amigos'}></Tab>
      <Tab label={'trabalho'}></Tab>
    </Tabs>
  </>
)

export default Header
