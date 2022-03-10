import styled from 'styled-components'
import { TitleMain } from '@/components/Elements/TItleMain'
import { CardItemClientPhone, CardItemClientDirection } from '@/components/Elements/CardItemsClients'
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardBody,
  CardButtonAction
} from '@/components/Elements/Cards'
import {
  InputElement,
  FormGroupAction
} from '@/components/Elements/Inputs'
import * as BoxIcon from 'react-icons/bi'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0 10px;
  align-items: center;
`

const SectionClient = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr;

  @media(min-width: 1280px) {
    grid-template-columns: 30% 70%;

    & ${Grid}{
      grid-template-columns: 1fr 1fr;
    }
  }
`

const FormClient = styled.div`
  /* outline: 2px solid orange ; */
  @media(min-width: 550px) {
    & ${Grid}{
      grid-template-columns: 1fr 1fr;
    }
  }
`

const SectionClientTable = styled.div`
  /* outline: 2px solid orange ; */
`

const Clients = () => {
  return (
    <main>
      <header className='Header__main-content'>
        <TitleMain textNeutral='Clien' textColor='tes.' />
      </header>
      <SectionClient>
        <FormClient>
          <Grid>
            <InputElement label='NIT'>
              <input type='text' />
            </InputElement>
            <InputElement label='Código'>
              <input type='text' disabled name='CodeClient' value='C-000123' />
            </InputElement>
          </Grid>
          <FormGroupAction label='Empresa'>
            <select>
              <option value=''>Platzi</option>
              <option value=''>Watsy</option>
            </select>
          </FormGroupAction>
          <InputElement label='Nombres'>
            <input type='text' />
          </InputElement>
          <InputElement label='Apellidos'>
            <input type='text' />
          </InputElement>
          <InputElement label='Correo Electrónico'>
            <input type='text' />
          </InputElement>
          <button className='Btn__ Btn__primary Btn__block'>Agregar Cliente</button>
        </FormClient>
        <SectionClientTable>
          <Grid>
            <CardContent>
              <CardHeader>
                <CardTitle>Direcciones</CardTitle>
                <CardButtonAction><BoxIcon.BiPlus /> Agregar</CardButtonAction>
              </CardHeader>
              <CardBody>
                <CardItemClientDirection active={false} />
                <CardItemClientDirection active />
                <CardItemClientDirection active={false} />
              </CardBody>
            </CardContent>
            <CardContent>
              <CardHeader>
                <CardTitle>Télefonos</CardTitle>
                <CardButtonAction><BoxIcon.BiPlus /> Agregar</CardButtonAction>
              </CardHeader>
              <CardBody>
                <CardItemClientPhone active={false} />
                <CardItemClientPhone active />
                <CardItemClientPhone active={false} />
              </CardBody>
            </CardContent>
          </Grid>
        </SectionClientTable>
      </SectionClient>
    </main>
  )
}

export default Clients
