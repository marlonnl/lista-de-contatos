import Tab from '../../components/Tab'
import { BuscarInput, CampoBusca, Tabs, TabsContainer } from './styles'

import * as enums from '../../utils/enums/contatos'
import AddButton from '../../components/AddButton'
import { BootstrapIcon } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const TabBar = () => {
  const dispatch = useDispatch()
  const { termoBusca } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <CampoBusca>
        <BuscarInput
          type="text"
          placeholder="pesquisar"
          value={termoBusca}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
        <BootstrapIcon>&#xF52A;</BootstrapIcon>
      </CampoBusca>

      <TabsContainer>
        <Tabs>
          <Tab label={'star'} fav={true} ativo={false}></Tab>
          <Tab label={'todos'} ativo={true}></Tab>

          {Object.values(enums.Caterogia).map((categoria) => (
            <Tab key={categoria} label={categoria} ativo={false} />
          ))}
        </Tabs>

        <AddButton />
      </TabsContainer>
    </>
  )
}

export default TabBar
