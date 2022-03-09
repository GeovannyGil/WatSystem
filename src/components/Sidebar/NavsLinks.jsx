import { Link } from 'react-router-dom'
// import { useState } from 'react'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--color-white);

  &.active{
    color: var(--primary-color);
  }

  &:hover{
    color: var(--primary-color);
  }
`

export const NavName = styled.span`
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
    white-space: nowrap;
    margin-left: 20px;
`

const NavDropdown = styled.div`
  overflow: hidden;
  max-height: 21px;
  transition: 0.4s ease-in-out;

  &:hover{
    max-height: 100rem;
  }

  .Nav__dropdown-icon{
    margin-left: auto;
    transition: all 0.2s ease-in-out;
  }

  &:hover .Nav__dropdown-icon{
    transform: rotate(180deg);
  }
`

const NavDropdownCollapse = styled.div`
  background-color: var(--color-black);
  border-radius: .25rem;
  margin-top: 1rem;

  .Nav__dropdown-content{
    display: grid;
    row-gap: .5rem;
    padding: .75rem 2.5rem .75rem 1.8rem;
  }
`

const NavDropdownItem = styled(Link)`
  font-size: var(--smaller-font-size);
  font-weight: var(--font-medium);
  color: var(--color-white);

  &:hover{
    color: var(--primary-color);
  }
`

const Navs = ({ items }) => {
  return items.map((props, i) => {
    if (props?.subNav) {
      return (
        <NavDropdown key={i}>
          <NavLink to={props.path}>
            {props.icon}
            <NavName>{props.title}</NavName>
            {props.iconArrow}
          </NavLink>
          <NavDropdownCollapse>
            <div className='Nav__dropdown-content'>
              {
                props.subNav.map((item, i) => (
                  <NavDropdownItem to={item.path} key={i}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavDropdownItem>
                ))
              }
            </div>
          </NavDropdownCollapse>
        </NavDropdown>
      )
    }
    return (
      <NavLink to={props.path} key={i}>
        {props.icon}
        <NavName>{props.title}</NavName>
      </NavLink>
    )
  })
}

export default Navs
