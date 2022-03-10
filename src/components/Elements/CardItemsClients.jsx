import clsx from 'clsx'
import {
  CardItem,
  CardItemActions
} from '@/components/Elements/Cards'
import * as BoxIcon from 'react-icons/bi'

export const CardItemClientDirection = ({ departament = 'Guatemala', municipality = 'Villa Nueva', direction = '5ta Avenida 96-5 Calle Colonia Buena Vista', active = false }) => {
  return (
    <CardItem>
      <label>Departamento: <span>{departament}</span></label>
      <label>Municipio: <span>{municipality}</span></label>
      <label>Dirección: <span>{direction}</span></label>
      <CardItemActions>
        <button className={clsx(active && 'active')}><BoxIcon.BiPin /></button>
        <button><BoxIcon.BiPencil /></button>
        <button><BoxIcon.BiTrash /></button>
      </CardItemActions>
    </CardItem>
  )
}

export const CardItemClientPhone = ({ phone = '4396-1286', active = false }) => {
  return (
    <CardItem>
      <label>Télefono: <span>{phone}</span></label>
      <CardItemActions>
        <button className={clsx(active && 'active')}><BoxIcon.BiPin /></button>
        <button><BoxIcon.BiPencil /></button>
        <button><BoxIcon.BiTrash /></button>
      </CardItemActions>
    </CardItem>
  )
}
