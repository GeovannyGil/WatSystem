import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root{
    --header-height: 4.5rem;
    --nav-width: 300px;

    /*============== COLORS ==============*/
    --background-color: ${({ theme }) => theme.backgroundColor};
    --alternate-background: ${({ theme }) => theme.primaryColor};
    --primary-color: ${({ theme }) => theme.primaryColor};
    --primary-color-saturate: ${({ theme }) => theme.primaryColorSaturate};
    --font-color: ${({ theme }) => theme.fontColor};
    --color-white: ${({ theme }) => theme.white};
    --color-black: ${({ theme }) => theme.negativeColor};
    --color-gray: ${({ theme }) => theme.gray};
    --color-gray-light: ${({ theme }) => theme.grayLight};

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
    background: var(--background-color);
    color: var(--font-color);
    font-family: var(--body-font);
    transition: all 0.50s linear;
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

  .title-page{
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
    font-size: var(--title-section-font-size);
  }


`
