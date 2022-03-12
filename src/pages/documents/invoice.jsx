
import styled from 'styled-components'
import { TitleMain, TitleLine, TextDescription, SpanLabelLink, SpanSelect } from '@/components/Elements/Texts'
import { HeaderTitleSection } from '@/components/Elements/Layout'
import { CardContent, CardHeader, CardTitle, CardButtonAction, CardDescription } from '@/components/Elements/Cards'
import { Item, TableCard, SectionProducts, HeaderProducts } from '@/components/Elements/Documents/Cards'
import { ButtonPrimary, ButtonSecondary } from '../../components/Elements/Buttons'
import * as BoxIcon from 'react-icons/bi'
import { CheckInput, InputElement, InputElementSelect, FormGroupAction } from '@/components/Elements/Inputs'

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

const SectionCreateOrderBuys = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr;

  @media(min-width: 1280px) {
    grid-template-columns: 40% 60%;
  }
`
const CardTitleSelect = styled(CardTitle)`
  color: var(--color-gray-light);
`

const SpanOrderId = styled(SpanLabelLink)`
  text-align: right;
`

const HeaderTitle = styled(HeaderTitleSection)`
  margin-bottom: 25px;
`

const ContentBtnActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`
const BtnAction = styled(ButtonPrimary, ButtonSecondary)`
    width: 100%;
  @media(min-width: 680px) {
    width: auto;
  }
`
// CARD PRODUCT
const BtnActionAddProduct = styled(CardButtonAction)`
  padding: 10px 20px;
`

const ContentItemsTable = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 10px;
  grid-template-rows: minmax(300px, 1.5fr);
  grid-auto-flow: column;
  grid-auto-columns: calc(50% 20px * 2);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  padding-bottom: calc(.75 * 20px);
  margin-bottom: calc(-.25 * 20px);

  &::before, &::after {
    content: '';
    width: 10px;
  }
`
// CARD PRODUCT

// MOUNT CONTENT
export const MountContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 15px;
  margin-top: 10px;

  @media(min-width: 680px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const TextArea = styled.textarea`

    background-color: transparent;
    border: var(--border-style);
    border-radius: 12px;
    caret-color: var(--primary-color);
    color: var(--color-white);
    font-size: var(--small-font-size);
    font-weight: normal;
    outline: none;
    padding: 15px;
    width: 100%;
    /* height: 300px; */
    font-family: 'Poppins', sans-serif;
    &:disabled{
      color: var(--color-gray-light);
    }

    &::placeholder{
      color: var(--color-gray-light);
      font-weight: var(--font-semi-bold);
    }
`
export const MountData = styled.div`
  width: 100%;
`

export const MounDataItem = styled.div`
  margin: 5px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-weight: var(--font-semi-bold);
`
export const MounDataLabel = styled.label`
  color: var(--color-gray-light);

`
export const MounDataSpan = styled.span`
  background-color: var(--alternate-background);
  color: var(--color-white);
  border-radius: 8px;
  padding: 2.5px 10px;
  text-align: center;
`
// MOUNT CONTENT

// TEXTAREA LIMIT
const limitTextAreaReact = (textarea, maxLength) => {
  if (textarea.value.length > maxLength) {
    textarea.value = textarea.value.substring(0, maxLength)
  }
  return textarea.value.length
}

export const TextLimit = styled.p`
  margin-top: 5px;
  font-size: var(--xs-font-size);
  & span{
    background-color: var(--alternate-background);
    padding:5px 10px;
    border-radius: 10px;
    margin: 0 5px 0 0;
  }
`

export const SpanLimitTextArea = () => {
  return (
    <TextLimit>
      <span>
        800
      </span>
      de 800 caracteres como limite
    </TextLimit>
  )
}
// TEXTAREA LIMIT

const Invoice = () => {
  return (
    <main>
      <HeaderTitle>
        <Grid>
          <TitleMain textNeutral='Crear' textColor=' Ord. Compra.' />
          <div>
            <InputElement label='No. de Ord. Compra:'>
              <input type='text' disabled value='C-794556' />
              <SpanOrderId>Último ingresaso: <a>C-080122</a></SpanOrderId>
            </InputElement>
          </div>
        </Grid>
      </HeaderTitle>
      <SectionCreateOrderBuys>
        <div>
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
              <SpanSelect>C-0000123</SpanSelect>
              <SpanSelect>Angel Chajón</SpanSelect>
            </div>
          </CardContent>
          <TitleLine>Generales</TitleLine>
          <InputElement label='Fecha de orden'>
            <input type='datetime-local' />
          </InputElement>
          <InputElement label='Fecha de vencimiento'>
            <input type='datetime-local' />
          </InputElement>
          <InputElementSelect label='Colaborador'>
            <select>
              <option value='1'>Geovanny Gil</option>
              <option value='2'>Orlando Sul</option>
            </select>
          </InputElementSelect>
          <InputElementSelect label='Sucursal de salida'>
            <select>
              <option value='1'>Central Guatemala</option>
              <option value='2'>Sumpango</option>
            </select>
          </InputElementSelect>
          <CheckInput text='Agregar dirección de entrega'>
            <input type='checkbox' />
          </CheckInput>
          <CardDescription label='Datos de la entrega'>
            <TextDescription>
              0 Av. 7-7 Buena vista, Sumpango Sacatepéquez
            </TextDescription>
            <TextDescription>
              05 de Noviembre del 2021 15:00hrs
            </TextDescription>
          </CardDescription>
        </div>
        <SectionProducts>
          <HeaderProducts>
            <div>
              <SpanLabelLink>Seguimiento de la orden: </SpanLabelLink>
              <SpanLabelLink><a>CO-000122</a></SpanLabelLink>
            </div>
            <InputElementSelect label='Estado de cotización'>
              <select>
                <option value='1'>Cita Pendiente</option>
                <option value='2'>Envio de cotización</option>
              </select>
            </InputElementSelect>
            <InputElement label='Días de crédito'>
              <input type='number' />
            </InputElement>
          </HeaderProducts>
          <TableCard>
            <CardHeader>
              <CardTitle>Productos</CardTitle>
              <BtnActionAddProduct><BoxIcon.BiPlus /> Agregar un producto</BtnActionAddProduct>
            </CardHeader>
            <ContentItemsTable>
              <Item />
              <Item />
              <Item />
            </ContentItemsTable>
          </TableCard>
          <MountContent>
            <div>
              <TextArea placeholder='Descripción del trabajo'>
              </TextArea>
              <SpanLimitTextArea />
            </div>
            <MountData>
              <TitleLine color='white'>Monto</TitleLine>
              <MounDataItem>
                <MounDataLabel>Subtotal</MounDataLabel>
                <MounDataSpan>Q 450.00</MounDataSpan>
              </MounDataItem>
              <MounDataItem>
                <MounDataLabel>Descuento</MounDataLabel>
                <MounDataSpan>Q 50.00</MounDataSpan>
              </MounDataItem>
              <hr />
              <MounDataItem>
                <MounDataLabel>Total</MounDataLabel>
                <MounDataSpan>Q 400.00</MounDataSpan>
              </MounDataItem>
            </MountData>
          </MountContent>
          <ContentBtnActions>
            <BtnAction><BoxIcon.BiDetail /> Generar Ord. Compra</BtnAction>
          </ContentBtnActions>
        </SectionProducts>
      </SectionCreateOrderBuys>
    </main>
  )
}

export default Invoice
