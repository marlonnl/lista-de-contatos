import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  ativo: boolean
}

const FilterTab = styled.p<Props>`
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  margin-right: 32px;
  cursor: pointer;
  position: relative;

  border-bottom: 2px solid
    rgb(${(props) => (props.ativo ? variables.tabAtivo : variables.tabInativo)});

  &:hover {
    border-bottom: 2px solid rgb(${variables.tabHover});
  }
`

export const TooltipTotal = styled.span`
  position: absolute;
  top: 0;
  right: 1;
  padding: 0 2px;
  margin-left: 2px;
  background-color: rgb(${variables.tabHover});
  color: #fff;
  border-radius: 4px;
  font-size: 10px;
  font-family: 'Nanum Gothic Coding', system-ui;
`

export default FilterTab
