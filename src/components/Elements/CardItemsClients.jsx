import clsx from 'clsx'
import {
  CardItem
} from '@/components/Elements/Cards'
import { ButtonIcon } from '@/components/Elements/Buttons'
import * as BoxIcon from 'react-icons/bi'
import styled from 'styled-components'

export const CardItemActions = styled.div`
  text-align: right;
`

export const CardItemClientDirection = (props) => {
  return (
    <CardItem>
      <label>Departamento: <span>{props.departament}</span></label>
      <label>Municipio: <span>{props.municipality}</span></label>
      <label>Dirección: <span>{props.directionClient}</span></label>
      <CardItemActions>
        <ButtonIcon className={clsx(props.active && 'active')}><BoxIcon.BiPin /></ButtonIcon>
        <ButtonIcon><BoxIcon.BiPencil /></ButtonIcon>
        <ButtonIcon><BoxIcon.BiTrash /></ButtonIcon>
      </CardItemActions>
    </CardItem>
  )
}

export const CardItemClientPhone = (props) => {
  return (
    <CardItem>
      <label>Télefono: <span>{props.phoneClient}</span></label>
      <CardItemActions>
        <ButtonIcon className={clsx(props.active && 'active')}><BoxIcon.BiPin /></ButtonIcon>
        <ButtonIcon><BoxIcon.BiPencil /></ButtonIcon>
        <ButtonIcon><BoxIcon.BiTrash /></ButtonIcon>
      </CardItemActions>
    </CardItem>
  )
}
