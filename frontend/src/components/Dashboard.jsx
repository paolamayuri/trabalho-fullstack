import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = ({ token, onLogout }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3001/dashboard', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setData(res.data)
      } catch {
        alert('Token inválido ou expirado')
        onLogout()
      }
    }
    fetchData()
  }, [])

  if (!data) return <p style={{ color: '#d48aa3' }}>Carregando...</p>

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>💗 Bem-vindo(a), {data.user.email}!</h2>
      <p style={styles.subtitle}>{data.message}</p>

      <h3 style={styles.listTitle}></h3>
      <ul style={styles.list}>
        {data.users.map((u, i) => (
          <li key={i} style={styles.listItem}>{u.email}</li>
        ))}
      </ul>

      <button style={styles.button} onClick={onLogout}>Sair</button>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#ffeef3',
    padding: '20px',
    borderRadius: '12px',
    width: '80%',
    maxWidth: '500px',
    margin: '50px auto',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  title: {
    color: '#d48aa3',
    fontSize: '24px',
    marginBottom: '10px'
  },
  subtitle: {
    color: '#555',
    fontSize: '16px',
    marginBottom: '20px'
  },
  listTitle: {
    color: '#c47189',
    fontSize: '18px',
    marginBottom: '10px'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  listItem: {
    backgroundColor: '#fbd6e3',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '8px',
    color: '#333',
  },
  button: {
    backgroundColor: '#f48fb1',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
  }
}

export default Dashboard
