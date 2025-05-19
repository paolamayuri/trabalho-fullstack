import React, { useState, useEffect } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
  const [page, setPage] = useState('login')
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    if (token) setPage('dashboard')
  }, [token])

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setPage('login')
  }

  return (
    <div>
      {page === 'register' && <Register onLogin={() => setPage('login')} />}
      {page === 'login' && <Login onLogin={setToken} onRegister={() => setPage('register')} />}
      {page === 'dashboard' && <Dashboard token={token} onLogout={logout} />}
    </div>
  )
}

export default App