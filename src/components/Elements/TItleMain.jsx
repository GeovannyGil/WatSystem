import styled from 'styled-components'

export const TitleLine = styled.h4`
  color: var(--color-gray);
  font-size:var(--normal-font-size);
  font-weight: var(--font-semi-bold);
  border-bottom: 1px solid var(--color-gray);
  padding: 10px;
  margin-bottom: 10px;
`

const TitleHeader = styled.h2`
  color: var(--color-white);
  font-size:var(--title-section-font-size);
  font-weight: var(--font-semi-bold);

  .Focus__title{
    color: var(--primary-color);
  }
`
export const TitleMain = ({ textNeutral, textColor }) => {
  return (
    <TitleHeader>{textNeutral}<span className='Focus__title'>{textColor}</span></TitleHeader>
  )
}
