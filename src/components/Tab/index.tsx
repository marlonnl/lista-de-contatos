import { useDispatch, useSelector } from 'react-redux'
import FilterTab from './styles'
import { alteraFiltro, alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  fav?: boolean
  label: string
  counter?: number
  criterio: 'todos' | 'familia' | 'amigos' | 'trabalho' | 'fav'
  ativo: boolean
}

const Tab = ({ label, fav, criterio: criterioProp }: Props) => {
  const dispatch = useDispatch()
  const { filtro } = useSelector((state: RootReducer) => state)

  const filtroAtivo = () => {
    const criterioIgual = filtro.criterio === criterioProp

    return criterioIgual
  }

  const filtrar = () => {
    dispatch(alteraFiltro(criterioProp))
  }

  const estaAtivo = filtroAtivo()

  return (
    <>
      <FilterTab ativo={estaAtivo} onClick={filtrar}>
        {fav ? (
          <>
            <i className="bi bi-star-fill"></i>
          </>
        ) : (
          <>{label}</>
        )}
      </FilterTab>
    </>
  )
}

export default Tab
