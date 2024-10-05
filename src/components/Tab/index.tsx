import FilterTab from './styles'

export type Props = {
  fav?: boolean
  label: string
  counter?: number
  criterio?: 'todos' | 'familia' | 'amigos' | 'trabalho'
}

const Tab = ({ label, fav }: Props) => {
  return (
    <>
      <FilterTab>
        {fav ? <i className="bi bi-star-fill"></i> : <>{label}</>}
      </FilterTab>
    </>
  )
}

export default Tab
