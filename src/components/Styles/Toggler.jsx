import { func, string } from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }) => theme.backgroundColor};
  border: 2px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.fontColor};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
`

const Toggler = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      Switch Theme
    </Button>
  )
}

Toggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default Toggler
