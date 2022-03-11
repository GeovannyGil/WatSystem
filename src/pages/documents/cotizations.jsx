
import styled from 'styled-components'
import { TitleMain, TitleLine, SpanLabelLink, SpanSelect } from '@/components/Elements/Texts'
import { HeaderTitleSection } from '@/components/Elements/Layout'
import { CardContent, CardHeader, CardTitle, CardButtonAction, CardItem } from '@/components/Elements/Cards'
import { ButtonPrimary, ButtonSecondary, ButtonIcon } from '../../components/Elements/Buttons'
import * as BoxIcon from 'react-icons/bi'
import { InputElement, InputElementSelect, FormGroupAction } from '@/components/Elements/Inputs'

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

const SectionCreateCotization = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr;

  @media(min-width: 1280px) {
    grid-template-columns: 50% 50%;
  }
`

const CardTitleSelect = styled(CardTitle)`
  color: var(--color-gray-light);
`
// PRODUCTS
export const ContentItem = styled(CardItem)`

  min-width: 400px;
  background: rgb(31,30,30);
  background: radial-gradient(circle, rgba(31,30,30,1) 0%, rgba(19,19,19,1) 74%, rgba(19,19,19,1) 100%);

`

export const SectionProducts = styled.div`
  margin-bottom: 15px;
`

export const HeaderProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0 10px;

  @media(min-width: 992px) {
    grid-template-columns: 0.5fr 1fr 1fr;
  }
  @media(min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export const TableCard = styled(CardContent)`
  max-height: 100%;
  width: 94vw;
  @media(min-width: 1280px) {
    width: 100% !important;
  }

  @media(min-width: 700px) {
    width: 88vw;
  }
`
const BtnActionAddProduct = styled(CardButtonAction)`
  padding: 10px 20px;
`

const LabelTop = styled.label`
  margin-bottom: 0 !important;
  margin-right: 15px !important;
`

const DateTop = styled.span`
  background-color: var(--primary-color);
  color: var(--color-white);
  border-radius: 8px;
  padding: 2.5px 10px;
`
const DescTop = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--small-font-size);
`
const DatesHeaderItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-content: space-between;

  & ${DescTop}:last-child{
    justify-content: flex-end;
  }
`

const DescriptionItem = styled.div`
  width: 100%;
  height: 65px;
  overflow: hidden;
  margin: 10px 0;

  &:hover {
    height: auto;
    /* position: absolute;
    background-color: var(--alternate-background); */
  }

  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`

const TotalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContentTotalItem = styled.div`
  display: grid;
`

const BtnActionsItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
`

const TotalItemLabel = styled.label`
  font-size: var(--normal-font-size) !important;
  color: var(--color-white) !important;
`
const TotalItemDate = styled.span`
  font-size: var(--normal-font-size) !important;
  font-size: var(--normal-font-size);
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

const Item = () => {
  return (
    <ContentItem>
      <DatesHeaderItem>
        <DescTop>
          <LabelTop>Cantidad:</LabelTop>
          <DateTop>5</DateTop>
        </DescTop>
        <DescTop>
          <LabelTop>Precio:</LabelTop>
          <DateTop>Q 80.00</DateTop>
        </DescTop>
      </DatesHeaderItem>
      <DescriptionItem>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint aliquam minima recusandae eos modi ut, enim exercitationem molestiae hic laboriosam id consequatur distinctio quibusdam perferendis quos mollitia eligendi eaque repellendus? Iste ullam, modi sapiente dolores id explicabo cumque aperiam deleniti velit asperiores ipsam omnis voluptatum vero amet maiores vel ab eaque inventore. Officiis repudiandae inventore itaque vero quaerat, dolor quos?
      </DescriptionItem>
      <ContentTotalItem>
        <TotalItem>
          <TotalItemLabel>Subtotal</TotalItemLabel>
          <TotalItemDate>Q 450.00</TotalItemDate>
        </TotalItem>
        <TotalItem>
          <TotalItemLabel>Descuento</TotalItemLabel>
          <TotalItemDate>Q 50.00</TotalItemDate>
        </TotalItem>
        <TotalItem>
          <TotalItemLabel>Total</TotalItemLabel>
          <TotalItemDate>Q 400.00</TotalItemDate>
        </TotalItem>
      </ContentTotalItem>
      <BtnActionsItems>
        <ButtonIcon><BoxIcon.BiEdit size='1.3em' /></ButtonIcon>
        <ButtonIcon><BoxIcon.BiTrash size='1.3em' /></ButtonIcon>
      </BtnActionsItems>
    </ContentItem>
  )
}

// PRODUCTS

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

const Cotizations = () => {
  return (
    <main>
      <HeaderTitle>
        <Grid>
          <TitleMain textNeutral='Crear' textColor=' Cotización.' />
          <div>
            <InputElement label='No. de Cotización:'>
              <input type='text' disabled value='C-794556' />
              <SpanOrderId>Último ingresaso: <a>C-080122</a></SpanOrderId>
            </InputElement>
          </div>
        </Grid>
      </HeaderTitle>
      <SectionCreateCotization>
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
          <ContentBtnActions>
            <BtnAction><BoxIcon.BiDetail /> Generar Cotización</BtnAction>
          </ContentBtnActions>
        </SectionProducts>
      </SectionCreateCotization>
    </main>
  )
}

export default Cotizations
