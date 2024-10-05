import FilterTab from './styles'

export type Props = {
  fav?: boolean
  label: string
  counter?: number
  criterio?: 'todos' | 'familia' | 'amigos' | 'trabalho'
  ativo: boolean
}

const Tab = ({ label, fav, ativo }: Props) => {
  return (
    <>
      <FilterTab ativo={ativo}>
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
