// import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import isotipo from '@/assets/img/isotipo-WatsyD-24px.svg'
import logotipo from '@/assets/img/Logotipo-WatsyD-24px.svg'
import { SidebarData } from './SidebarData'
import Navs, { NavLink, NavName } from './NavsLinks'
import { IoMdLogOut } from 'react-icons/io'

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  height: 100vh;
  transition: .4s;
  z-index: var(--z-fixed);
  padding: 1rem 1rem 3rem;
  background-color: var(--alternate-background);

  &::-webkit-scrollbar{
    display: none; /* For Google Chrome and others */
  }

  &.Nav__logo{
    font-weight: var(--font-semi-bold);
    margin-bottom: 2.5rem;
  }

  .Nav__items{
    display: grid;
    row-gap: 1.5rem;
  }

  .Nav__subtitle{
    margin-top: 1rem;
    font-size: var(--normal-font-size);
    text-transform: uppercase;
    letter-spacing: .1rem;
    color: var(--text-color-light);
  }

  .Nav__icon-iso{
    display: none;
  }

  .Nav__icon-lgtipo{
    width: 100%;
  }

  @media screen and (min-width: 768px){
    left: 0;
    padding: 3rem 1.5rem 3rem;
    width: 68px;

    .Nav__items{
      row-gap: 1.7rem;
    }

    .Nav__icon-iso{
      display: block;
      transition: .2s ease-in-out;
    }

    .Nav__icon-lgtipo{
      display: none;
      transition: .2s ease-in-out;
    }

    .Nav__logo-name,
    ${NavName},
    .Nav__subtitle,
    .Nav__dropdown-icon{
      opacity: 0;
      transition: .3s;
    }

    &:hover{
      width: var(--nav-width);
    }

    &:hover .Nav__logo-name{
      opacity: 1;
    }

    &:hover .Nav__icon-iso{
      display: none;
      transition: .2s ease-in-out;
    }
    &:hover .Nav__icon-lgtipo{
      display: block;
      width: 100%;
      transition: .2s ease-in-out;
    }

    &:hover .Nav__subtitle{
      opacity: 1;
    }
    &:hover ${NavName}{
      opacity: 1;
    }
    &:hover .Nav__dropdown-icon{
      opacity: 1;
    }
  }

`
const NavContainer = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  scrollbar-width: none; /* For Mozilla */
`

const NavList = styled.div`
  display: grid;
  row-gap: 2.5rem;
`

const Logout = styled(NavLink)`
  margin-top: 5rem;

  ${NavName}{
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
    white-space: nowrap;
    margin-left: 20px;
  }
`

const Sidebar = () => {
  return (
    <Nav id='NavBar'>
      <NavContainer>
        <div>
          <Link to='/' className='Nav__link Nav__logo'>
            <img src={isotipo} className='Nav__icon-iso' />
            <img src={logotipo} className='Nav__icon-lgtipo' />
          </Link>
          <NavList>
            {
              SidebarData.map((item, i) => {
                return (
                  <div key={i} className='Nav__items'>
                    <h3 className='Nav__subtitle'>{item.tag}</h3>
                    <Navs items={item.navs} />
                  </div>
                )
              })
            }

          </NavList>
        </div>
        {/* <Logout to='/'>
          <IoMdLogOut />
          <NavName>Logout</NavName>
        </Logout> */}
      </NavContainer>
    </Nav>
  )
}

export default Sidebar
