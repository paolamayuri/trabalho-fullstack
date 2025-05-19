const express = require('express')
const cors = require('cors')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const app = express()
const PORT = 3001
const SECRET = 'secreto123'
const DB_FILE = './users.json'

app.use(cors())
app.use(express.json())

const loadUsers = () => {
  if (!fs.existsSync(DB_FILE)) return []
  return JSON.parse(fs.readFileSync(DB_FILE))
}

const saveUsers = (users) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2))
}

app.post('/register', async (req, res) => {
  const { email, password } = req.body
  const users = loadUsers()

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Usuário já existe' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  users.push({ email, password: hashedPassword })
  saveUsers(users)

  res.status(201).json({ message: 'Usuário registrado com sucesso' })
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  const users = loadUsers()
  const user = users.find(u => u.email === email)

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Credenciais inválidas' })
  }

  const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' })
  res.json({ token })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.sendStatus(401)

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.get('/dashboard', authenticateToken, (req, res) => {
    const users = loadUsers().map(u => ({ email: u.email })) 
    res.json({ message: 'Lista de Usuarios:', user: req.user, users })
  })
  

app.listen(PORT, () => {
  console.log(`🔐 Backend rodando em http://localhost:${PORT}`)
})
