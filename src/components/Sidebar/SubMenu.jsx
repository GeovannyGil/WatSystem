import { Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover{
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`

const SidebarLabel = styled.span`
  margin-left: 16px;
`

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover{
    background: #632ce4;
    cursor: pointer;
  }
`

const Submenu = (props) => {
  const [subNav, setSubnav] = useState(false)

  const showSubNav = () => setSubnav(!subNav)

  return (
    <>
      <SidebarLink to={props.path} onClick={props.subNav && showSubNav}>
        <div>
          {props.icon}
          <SidebarLabel>{props.title}</SidebarLabel>
        </div>
        {props.subNav && (
          <div>
            {
              subNav
                ? props.iconOpen
                : props.iconClosed
            }
          </div>
        )}
      </SidebarLink>
      {subNav && props.subNav.map((item, i) => {
        return (
          <DropdownLink to={item.path} key={i}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </>
  )
}

export default Submenu
