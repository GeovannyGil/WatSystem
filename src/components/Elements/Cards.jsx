import { ButtonIcon } from '@/components/Elements/Buttons'
import { SubTitles } from '@/components/Elements/Texts'
import * as BoxIcon from 'react-icons/bi'
import styled from 'styled-components'

export const CardContent = styled.div`
  background-color: transparent;
  border-radius: 15px;
  border: var(--border-style);
  box-shadow: 3px 3px 4px 0px rgb(22 8 43 / 8%);
  max-height: 300px;
  padding: 15px 35px;
`
export const CardHeader = styled.header`
  align-items: center;
  justify-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`

export const CardTitle = styled.h4`
  color: var(--color-white)
`
export const CardBody = styled.div`
  overflow: hidden;
  height: 220px;
  overflow-y: auto;
`
export const CardButtonAction = styled.button`
  background-color: transparent;
  border: none;
  font-size: var(--btn-card-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--color-white);
  padding: 5px 25px;
  border-radius: 25px;
  cursor: pointer;
  border: var(--border-style);
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.01);

  &:hover{
    background-color: var(--primary-color);
  }
`
export const CardItem = styled.div`
  background-color: var(--alternate-background);
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 15px;
  border: 1px solid transparent;
  transition: .2s;

  &:hover{
    border: 1px solid var(--primary-color);
  }

  & label{
    font-size: var(--smaller-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--color-gray-light);
    margin: 0;
    display: block;
    margin-bottom: 5px;

    & span{
        font-weight: normal;
        color: var(--color-white);
    }
  }
`

const DescriptionCard = styled.div`
   header{
    display: flex;
    align-items: center;
   }
`

export const CardDescription = ({ label, children }) => {
  return (
    <DescriptionCard>
      <header>
        <SubTitles>{label}</SubTitles>
        <ButtonIcon><BoxIcon.BiEdit size='1.2em' /></ButtonIcon>
      </header>
      {children}
    </DescriptionCard>
  )
}
