import { Routes, Route } from 'react-router-dom'

import './App.css'

import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUp'
import TopUp from './pages/TopUp'
import Transfer from './pages/Transfer'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/top-up" element={<TopUp />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </div>
  )
}

export default App
