import { useDispatch } from 'react-redux'
import FilterTab from './styles'
import { alteraFiltro, alteraTermo } from '../../store/reducers/filtro'

export type Props = {
  fav?: boolean
  label: string
  counter?: number
  criterio: 'todos' | 'familia' | 'amigos' | 'trabalho' | 'fav'
  ativo: boolean
}

const Tab = ({ label, fav, ativo, criterio }: Props) => {
  const dispatch = useDispatch()

  const filtrar = () => {
    dispatch(alteraFiltro(criterio))
  }

  return (
    <>
      <FilterTab ativo={ativo} onClick={filtrar}>
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
