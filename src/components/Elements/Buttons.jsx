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
