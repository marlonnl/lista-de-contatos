import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  ativo: boolean
}

const FilterTab = styled.p<Props>`
  font-size: 14px;
  font-weight: bold;
  padding: 16px 0 4px;
  margin-right: 24px;
  cursor: pointer;

  border-bottom: 2px solid
    rgb(${(props) => (props.ativo ? variables.tabAtivo : variables.tabInativo)});

  &:hover {
    border-bottom: 2px solid rgb(${variables.tabHover});
  }
`

export default FilterTab
