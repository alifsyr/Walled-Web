import { Routes, Route } from 'react-router-dom'

import './App.css'

import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUp'
import TopUp from './pages/TopUp'
import Transfer from './pages/Transfer'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/top-up" element={<TopUp />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
