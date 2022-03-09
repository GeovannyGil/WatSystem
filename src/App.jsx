import './App.css'
import Sidebar from '@/components/Sidebar/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '@/pages/dashboard'
import Clients from '@/pages/clients'
import Colaborators from '@/pages/colaborators'
import Orders from '@/pages/documents/orders'

function App () {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/clients' exact element={<Clients />} />
        <Route path='/colaborators' exact element={<Colaborators />} />
        <Route path='/documents/orders' exact element={<Orders />} />
      </Routes>
    </Router>
  )
}

export default App
