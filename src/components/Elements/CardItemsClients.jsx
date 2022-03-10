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

export const CardItemClientDirection = ({ departament = 'Guatemala', municipality = 'Villa Nueva', direction = '5ta Avenida 96-5 Calle Colonia Buena Vista', active = false }) => {
  return (
    <CardItem>
      <label>Departamento: <span>{departament}</span></label>
      <label>Municipio: <span>{municipality}</span></label>
      <label>Dirección: <span>{direction}</span></label>
      <CardItemActions>
        <ButtonIcon className={clsx(active && 'active')}><BoxIcon.BiPin /></ButtonIcon>
        <ButtonIcon><BoxIcon.BiPencil /></ButtonIcon>
        <ButtonIcon><BoxIcon.BiTrash /></ButtonIcon>
      </CardItemActions>
    </CardItem>
  )
}

export const CardItemClientPhone = ({ phone = '4396-1286', active = false }) => {
  return (
    <CardItem>
      <label>Télefono: <span>{phone}</span></label>
      <CardItemActions>
        <ButtonIcon className={clsx(active && 'active')}><BoxIcon.BiPin /></ButtonIcon>
        <ButtonIcon><BoxIcon.BiPencil /></ButtonIcon>
        <ButtonIcon><BoxIcon.BiTrash /></ButtonIcon>
      </CardItemActions>
    </CardItem>
  )
}
