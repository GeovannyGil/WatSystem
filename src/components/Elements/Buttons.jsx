import styled from 'styled-components'

export const ButtonIcon = styled.button`
    background-color: transparent;
    border: none;
    font-size: calc(var(--small-font-size) * 1.2);
    padding: 0;
    color: var(--color-white);
    margin: 0 5px;
    cursor: pointer;

    &.active{
      color: var(--primary-color);
    }

    &:hover{
      color: var(--primary-color);
    }
`

export const Button = styled.button`
    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.01);
    color: var(--color-white);
    cursor: pointer;
    font-size: var(--btn-primary-font-size);
    font-weight: var(--font-semi-bold);
    margin-bottom: 15px;
    padding: 15px 25px;
    width: ${(props) => props.size || 'auto'};

    &.Btn__small{
      font-size: var(--small-font-size);
      padding: 8px 25px;
    }
`
export const ButtonPrimary = styled(Button)`
  background-color: var(--primary-color);
  border: none;

  &:hover{
    background-color: var(--primary-color-saturate);
  }

`
export const ButtonSecondary = styled(Button)`
  background-color: transparent;
  border: var(--border-style);

  &:hover{
    background-color: var(--primary-color-saturate)
  }
`
