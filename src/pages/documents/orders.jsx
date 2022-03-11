
import styled from 'styled-components'
import { TitleMain, TitleLine, TextDescription, SpanLabelLink } from '@/components/Elements/Texts'
import { HeaderTitleSection } from '@/components/Elements/Layout'
import { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/Elements/Cards'
import * as BoxIcon from 'react-icons/bi'
import { CheckInput, InputElement, InputElementSelect, FormGroupAction } from '@/components/Elements/Inputs'
import { Tiptap } from '@/components/Elements/RichText'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  align-items: center;

  @media(min-width: 1280px) {
   grid-template-columns: 80% 20%;
  }

  @media(min-width: 820px) {
   grid-template-columns: 70% 30%;
  }
`

const SectionCreateOrder = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr;

  @media(min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
`

const FormOrder = styled.div`
  /* outline: 2px solid orange ; */
`
const CardTitleSelect = styled(CardTitle)`
  color: var(--color-gray-light);
`

const SpanSelectClient = styled.span`
  color: var(--color-white);
  font-size: var(--smaller-font-size);
  font-weight: var(--normal-font-size);
  display: block;
  width: 100%;
  margin: 10px 0;
`
const SectionRichText = styled.div`
  /* outline: 2px solid orange ; */
  margin-bottom: 15px;
`

const SpanOrderId = styled(SpanLabelLink)`
  text-align: right;
`

const HeaderTitle = styled(HeaderTitleSection)`
  margin-bottom: 25px;
`

const Orders = () => {
  return (
    <main>
      <HeaderTitle>
        <Grid>
          <TitleMain textNeutral='Crear' textColor=' Orden.' />
          <div>
            <InputElement label='No. de Orden:'>
              <input type='text' disabled value='O-7956' />
              <SpanOrderId>Último ingresaso: <a>C-000122</a></SpanOrderId>
            </InputElement>
          </div>
        </Grid>
      </HeaderTitle>
      <SectionCreateOrder>
        <FormOrder>
          <FormGroupAction label='Cliente'>
            <select>
              <option value=''>Inbestgo</option>
              <option value=''>Innovate</option>
            </select>
          </FormGroupAction>
          <CardContent>
            <CardHeader>
              <CardTitleSelect>Cliente Seleccionado</CardTitleSelect>
              <button className='Btn__icon'><BoxIcon.BiInfoCircle size='1.1em' /></button>
            </CardHeader>
            <div>
              <SpanSelectClient>C-0000123</SpanSelectClient>
              <SpanSelectClient>Angel Chajón</SpanSelectClient>
            </div>
          </CardContent>
          <TitleLine>Generales</TitleLine>
          <InputElement label='Fecha de orden'>
            <input type='datetime-local' />
          </InputElement>
          <InputElementSelect label='Colaborador'>
            <select>
              <option value='1'>Geovanny Gil</option>
              <option value='2'>Orlando Sul</option>
            </select>
          </InputElementSelect>
          <InputElementSelect label='Estado de orden'>
            <select>
              <option value='1'>Cita Pendiente</option>
              <option value='2'>Envio de cotización</option>
            </select>
          </InputElementSelect>
          <CheckInput text='Agendar Cita'>
            <input type='checkbox' />
          </CheckInput>
          <CardDescription label='Datos de la cita'>
            <TextDescription>
              0 Av. 7-7 Buena vista, Sumpango Sacatepéquez
            </TextDescription>
            <TextDescription>
              05 de Noviembre del 2021 15:00hrs
            </TextDescription>
          </CardDescription>
        </FormOrder>
        <SectionRichText>
          <Tiptap />
        </SectionRichText>
      </SectionCreateOrder>
    </main>
  )
}

export default Orders
