import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root{
    --header-height: 4.5rem;
    --nav-width: 300px;

    /*============== COLORS ==============*/
    --background-color: ${({ theme }) => theme.backgroundColor};
    --alternate-background: ${({ theme }) => theme.alternateBackgroundColor};
    --primary-color: ${({ theme }) => theme.primaryColor};
    --primary-color-saturate: ${({ theme }) => theme.primaryColorSaturate};
    --font-color: ${({ theme }) => theme.fontColor};
    --color-white: ${({ theme }) => theme.white};
    --color-black: ${({ theme }) => theme.negativeColor};
    --color-gray: ${({ theme }) => theme.gray};
    --color-gray-light: ${({ theme }) => theme.grayLight};

    --border-style: 2px solid var(--primary-color);
    /*============== FONT AND TIPOGRAPHY ==============*/
    --body-font: 'Poppins', sans-serif;
    --icon-action-text: 2rem;
    --title-section-font-size: 2rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;
    --xs-font-size: 0.90rem;

    /*============== BUTTON TEXT ==============*/
    --btn-primary-font-size: 1.18rem;
    --btn-card-font-size: 0.85rem;

    /*============== FONT WEIGHT ==============*/
    --font-medium: 500;
    --font-semi-bold: 600;
    /*============== Z INDEX ==============*/
    --z-fixed: 100;
  }

  body {
    padding: 1rem 1rem 0;
    color: var(--font-color);
    transition: all 0.50s linear;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    margin: var(--header-height) 0 0 0;
    background-color: var(--background-color);
  }

  @media screen and (min-width: 1024px) {
    :root {
      --icon-action-text: 3rem;
      --title-section-font-size: 3.2rem;
      --normal-font-size: 1.3rem;
      --small-font-size: 1.05rem;
      --smaller-font-size: 0.95rem;
      --xs-font-size: 0.85rem;
      /* BUTTON TEXT */
      --btn-primary-font-size: 1.38rem;
      --btn-card-font-size: 0.95rem;
    }
  }

  /*============== STYLES GENERALS ==============*/
  h1,h2,h3,h4,h5,h6{
    margin: 0;
  }
  p{
    margin: 0;
  }
  a{
    text-decoration: none;
  }

  img{
    max-width: 100%;
    height: auto;
  }

  button{
    background-color: transparent;
    border: none;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: transparent var(--primary-color);
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 3px;
    height: 7px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 25px;
  }

  ::-webkit-calendar-picker-indicator {
    filter: ${({ theme }) => (theme === 'darkTheme') ? 'invert(0)' : 'invert(1)'};
  }

  hr{
    border-color: var(--color-gray);
  }
  /*============== HEADER ==============*/
  .Header{
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 1rem;
    position: fixed;
    z-index: var(--z-fixed);
    background-color: var(--background-color);
    /* box-shadow: 0 1px 0 rgb(22,8,43,.1); */
  }

  .Header__container{
    display: flex;
    align-items: center;
    height: var(--header-height);
    justify-content: space-between;
  }

  .Header__img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    outline: 2px solid var(--primary-color);
    border: solid 2px transparent;
    cursor: pointer;
  }

  .Header__logo{
    color: var(--font-color);
    font-weight: var(--font-medium);
    display: none;
  }

  .Header__search{
    display: flex;
    padding: .40rem .75rem;
    background-color: transparent;
    border: 2px solid var(--primary-color-saturate);
    box-shadow: 3px 3px 4px 0px rgb(22 8 43 / 8%);
    border-radius: .5rem;
    align-items: center;
  }

  .Header__input{
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--color-white);

    &::placeholder{
      color: var(--color-font);
    }
  }

  .Header__icon,
  .Header__toggle{
    font-size: 2.2rem;
    color: var(--font-color);
  }

  .Header__toggle{
    cursor: pointer;
  }

  /*============== MEDIA QUERYS ==============*/
  /* For small devices reduce search */
  @media screen and (min-width: 320px){
    .Header__search{
      width: 70%;
    }
  }

  @media screen and (min-width: 768px){
    body{
      padding: 1rem 3rem 0 6rem;
    }

    .Header{
      padding: 0 3rem 0 6rem;
    }

    .Header__container{
      height: calc(var(--header-height) + .5rem);
    }

    .Header__search{
      width: 400px;
      padding: .55rem .75rem;
    }

    .Header__toggle{
      display: none;
    }

    .Header__logo{
      display: block;
    }

    .Header__img{
      width: 50px;
      height: 50px;
      order: 1;
    }
  }

  /*================= STYLES GENERALS ELEMENTS =====================*/
  /* BUTTON */


  .Btn__icon{
    color: var(--color-white);
    cursor: pointer;
    font-size: var(--btn-primary-font-size);
    font-weight: var(--font-semi-bold);

    &:hover{
      color: var(--primary-color);
    }
  }

  /*================= BOOTSTRAP =====================*/
  .LabelBForm{
    color: var(--color-gray);
  }

  .BtnPrimary{
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    &:hover{
      background-color: var(--primary-color-saturate);
      border-color: var(--primary-color);
    }
  }

  .BtnSecondary{
    background-color: transparent;
    border-color: var(--primary-color);
    color: var(--primary-color);
    &:hover{
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      color: var(--color-white);
    }
  }

  /*================= CLIENTS =====================*/
  .cardsItemsNull{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
    color: var(--color-gray-light);
    font-weight: var(--font-semi-bold);
    opacity: 0.5;
  }

  .badgeIC {
    width: 100%;
    text-align: center;
    ${'' /* color: var(--color-black); */}
    background-color: var(--color-gray)  !important;
  }
`
