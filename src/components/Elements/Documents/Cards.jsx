
import { CardItem, CardContent } from '@/components/Elements/Cards'
import { ButtonIcon } from '@/components/Elements/Buttons'
import styled from 'styled-components'
import * as BoxIcon from 'react-icons/bi'

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

export const Item = () => {
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
