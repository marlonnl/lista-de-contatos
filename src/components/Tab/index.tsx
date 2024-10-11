import { useDispatch, useSelector } from 'react-redux'
import FilterTab, { TooltipTotal } from './styles'
import { alteraFiltro, alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import { totalmem } from 'os'

export type Props = {
  fav?: boolean
  label: string
  counter?: number
  criterio: 'todos' | 'familia' | 'amigos' | 'trabalho' | 'fav'
  ativo: boolean
}

const Tab = ({ label, fav: favorito, criterio: criterioProp }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const nCategoria = () => {
    if (label === 'todos') {
      return contatos.contatos.length
    } else if (label === 'star') {
      return contatos.contatos.filter((c) => c.fav === true).length
    } else {
      return contatos.contatos.filter((c) => c.categoria === label).length
    }
  }

  const filtroAtivo = () => {
    const criterioIgual = filtro.criterio === criterioProp

    return criterioIgual
  }

  const filtrar = () => {
    dispatch(alteraFiltro(criterioProp))
  }

  const estaAtivo = filtroAtivo()
  const total = nCategoria()

  return (
    <>
      <FilterTab ativo={estaAtivo} onClick={filtrar}>
        {favorito ? (
          <>
            <i className="bi bi-star-fill"></i>
          </>
        ) : (
          <>{label}</>
        )}
        <TooltipTotal>{total}</TooltipTotal>
      </FilterTab>
    </>
  )
}

export default Tab
