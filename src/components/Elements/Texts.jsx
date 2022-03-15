import styled from 'styled-components'

export const TitleLine = styled.h4`
  color: ${(props) => props.color === 'white' ? 'var(--color-white)' : 'var(--color-gray)'};
  font-size:var(--normal-font-size);
  font-weight: var(--font-semi-bold);
  border-bottom: 1px solid var(--color-gray);
  padding: 10px;
  margin-bottom: 10px;
`

export const TitleHeader = styled.h2`
  color: var(--color-white);
  font-size:var(--title-section-font-size);
  font-weight: var(--font-semi-bold);

  .Focus__title{
    color: var(--primary-color);
  }
`
export const SubTitles = styled.h5`
  color: var(--color-gray-light);
  font-size: var(--normal-font-size);
`
export const TextDescription = styled.div`
  color: var(--primary-color);
  font-size: var(--smaller-font-size);
  display: block;
`

export const SpanLabelLink = styled.span`
  font-size: var(--xs-font-size);
  margin: 10px 0;
  display: block;
  width: 100%;

  a{
    color: var(--primary-color) !important;
  }
`

export const SpanSelect = styled.span`
  color: var(--color-white);
  font-size: var(--smaller-font-size);
  font-weight: var(--normal-font-size);
  display: block;
  width: 100%;
  margin: 10px 0;
`

export const TitleMain = ({ textNeutral, textColor }) => {
  return (
    <TitleHeader>{textNeutral}<span className='Focus__title'>{textColor}</span></TitleHeader>
  )
}
