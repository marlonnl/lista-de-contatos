import styled from 'styled-components'
import variables from '../../styles/variables'

export const FormTitle = styled.h2`
  font-size: 22px;
  margin-top: 40px;
`

export const FormStyle = styled.form`
  margin-top: 24px;
  padding: 0 40px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FormGroup = styled.div`
  display: flex;
  align-items: center;

  &:nth-last-of-type(3) {
    margin-bottom: 16px;
  }
`

export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  outline: none;
`

export const RadioList = styled.div`
  padding: 8px;
  /* border-radius: 8px;
  border: 1px solid rgb(${variables.secondaryText}); */
  /* width: 50%; */
  /* display: flex; */

  label {
    margin-left: 8px;
  }
`

export const Opcao = styled.div`
  display: inline;
  margin-right: 16px;
  padding-left: 4px;
`

export const Botao = styled.button`
  margin-top: 16px;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  align-self: flex-end;
  width: fit-content;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  background-color: rgb(${variables.buttonBgColor});

  &:hover {
    background-color: rgba(${variables.buttonBgColor}, 0.9);
  }
`
