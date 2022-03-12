import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '@/hooks/useDarkMode'
import { GlobalStyles } from '@/components/Styles/GlobalStyles'
import { lightTheme, darkTheme } from '@/components/Styles/Theme'
import './App.css'
// import Toggler from '@/components/Styles/Toggler'
import Sidebar from '@/components/Sidebar/index'
import Header from '@/components/BarTop/index'
import Dashboard from '@/pages/dashboard'
import Clients from '@/pages/clients'
import Colaborators from '@/pages/colaborators'
import Orders from '@/pages/documents/orders'
import Cotizations from '@/pages/documents/cotizations'
import Invoice from '@/pages/documents/invoice'

function App () {
  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Header />
        <Sidebar />
        {/* <Toggler theme={theme} toggleTheme={themeToggler} /> */}
        <Routes>
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/clients' exact element={<Clients />} />
          <Route path='/colaborators' exact element={<Colaborators />} />
          <Route path='/documents/orders' exact element={<Orders />} />
          <Route path='/documents/cotizations' exact element={<Cotizations />} />
          <Route path='/documents/invoice' exact element={<Invoice />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
