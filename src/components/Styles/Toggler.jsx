import { func, string } from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  background: var(--background-color);
  border: 2px solid var(--primary-color);
  color: var(--font-color);
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
