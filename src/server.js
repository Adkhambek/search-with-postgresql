const express = require('express')
const app = express()

const fetch = require('./database')

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/users', async (req,res) => {
    const users = await fetch('SELECT * FROM users')
    res.status(200).json(users)
})

app.get('/books', async (req,res) => {
    const users = await fetch('SELECT * FROM books')
    res.status(200).json(users)
})

app.get('/films', async (req,res) => {
    const users = await fetch('SELECT * FROM films')
    res.status(200).json(users)
})


app.listen(8000, () => console.log('http://localhost:8000'))