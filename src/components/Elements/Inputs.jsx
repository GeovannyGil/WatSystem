import styled from 'styled-components'
import * as BoxIcon from 'react-icons/bi'

export const Checkbox = styled.label`
  font-size: var(--small-font-size);
  font-weight: var(--font-semi-bold);
  line-height: 1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  background-color: transparent;
  border: none;
  padding: 0.5em;

  & + .form-control{
    margin-top: 1em;
  }

  .form-control--disabled{
    color: var(--form-control-disabled);
    cursor: not-allowed;
  }

  input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: transparent;
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: var(--primary-color);
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid var(--primary-color);
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

      &:checked::before {
        transform: scale(1);
      }

      &::before{
        content: "";
        width: 0.65em;
        height: 0.65em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        /* Windows High Contrast Mode */
        background-color: var(--color-white);
      }

      &:focus{
        outline: max(2px, 0.15em) solid currentColor;
        outline-offset: max(2px, 0.15em);
      }

      &:disabled{
        input[type="checkbox"]:disabled {
        --form-control-color: var(--form-control-disabled);
        color: var(--form-control-disabled);
        cursor: not-allowed;
      }
    }
  }
`
export const CheckInput = ({ text, children }) => {
  return (
    <Checkbox>
      {children}
      <span>{text}</span>
    </Checkbox>
  )
}

export const InputStandard = styled.div`
    background-color: transparent;
    border-radius: 15px;
    border: var(--border-style);
    box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.01);
    height: 70px;
    margin: 0  0 10px 0;
    padding: 10px 0;

    &:hover{
      border: 2px solid  var(--color-white);
    }

  & label{
    border: 1px solid transparent;
    color: var(--font-color);
    display: block;
    font-size: calc(var(--smaller-font-size) * 1.1);
    line-height: 20px;
    padding: 0 15px;
    transition: .3s all ease-in-out;
    white-space: nowrap;
  }

  & input{
    background-color: transparent;
    border: none;
    caret-color: var(--primary-color);
    color: var(--color-white);
    font-size: var(--normal-font-size);
    font-weight: var(--font-semi-bold);
    outline: none;
    padding: 0 15px;
    width: 100%;

    &:disabled{
      color: var(--color-gray-light);
    }
  }
`

export const InputElement = ({ label, children }) => {
  return (
    <InputStandard>
      <label>{label}</label>
      {children}
    </InputStandard>
  )
}

export const InputSelect = styled(InputStandard)`
    position: relative;

    select{
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-color: transparent;
      border: none;
      color: var(--color-white);
      cursor: pointer;
      font-size: var(--normal-font-size);
      font-weight: var(--font-semi-bold);
      outline: none;
      padding: 0 15px;
      width: 100%;

      & option{
        color: var(--color-black);
      }
    }

  & .__Input__select-i-arrow{
    border-radius: 50%;
    cursor: pointer;
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 40%;
  }
`

export const InputElementSelect = ({ label, children }) => {
  return (
    <InputSelect>
      <label>{label}</label>
      <BoxIcon.BiChevronDown className='__Input__select-i-arrow' size='1.5em' />
      {children}
    </InputSelect>
  )
}

export const FormGroupActionE = styled.div`
    display: grid;
    grid-template-columns: 85% 15%;
    grid-gap: 5px;
    align-items: center;
    justify-items: center;

    & ${InputSelect}{
      width: 100%;
    }

    & .__Input__action-btn{
      align-items: center;
      background-color: var(--primary-color);
      border-radius: 50%;
      border: none;
      box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.01);
      color: var(--color-white);
      cursor: pointer;
      display: flex;
      font-size: var(--icon-action-text);
      height: 50px;
      justify-content: center;
      padding: 10px;
      width: 50px;

      &:hover{
        background-color: var(--primary-color-saturate);
      }
    }
`

export const FormGroupAction = ({ children, label }) => {
  return (
    <FormGroupActionE>
      <InputElementSelect label={label}>
        {children}
      </InputElementSelect>
      <button className='__Input__action-btn' data-bs-toggle='modal' data-bs-target='#Modal-addBusiness'><BoxIcon.BiPlus /></button>
    </FormGroupActionE>
  )
}
