import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '@/hooks/useDarkMode'
import { GlobalStyles } from '@/components/Styles/GlobalStyles'
import { lightTheme, darkTheme } from '@/components/Styles/Theme'
import './App.css'
import Toggler from '@/components/Styles/Toggler'
import Sidebar from '@/components/Sidebar/index'
import Dashboard from '@/pages/dashboard'
import Clients from '@/pages/clients'
import Colaborators from '@/pages/colaborators'
import Orders from '@/pages/documents/orders'

function App () {
  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Sidebar />
        <Toggler theme={theme} toggleTheme={themeToggler} />
        <Routes>
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/clients' exact element={<Clients />} />
          <Route path='/colaborators' exact element={<Colaborators />} />
          <Route path='/documents/orders' exact element={<Orders />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
