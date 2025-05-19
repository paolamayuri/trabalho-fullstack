import React, { useState } from 'react'
import axios from 'axios'

const Register = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3001/register', { email, password })
      alert('Cadastro realizado! Faça login.')
      onLogin()
    } catch (err) {
      alert('Erro ao registrar: ' + err.message)
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🌷 Cadastro</h2>
      <input
        style={styles.input}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={styles.button} onClick={handleRegister}>Registrar</button>
      <p style={styles.link} onClick={onLogin}>Já tem conta? Faça login</p>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#ffeef3',
    padding: '30px',
    borderRadius: '12px',
    width: '80%',
    maxWidth: '400px',
    margin: '50px auto',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  title: {
    color: '#d48aa3',
    fontSize: '24px',
    marginBottom: '20px'
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc'
  },
  button: {
    backgroundColor: '#f48fb1',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  link: {
    color: '#a05278',
    marginTop: '15px',
    cursor: 'pointer',
    textDecoration: 'underline'
  }
}

export default Register
