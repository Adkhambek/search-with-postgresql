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

app.post('/api/users/search', async (req,res) => {
    const {search} = req.body
    console.log(search);
    const query = `
    SELECT * FROM users
    WHERE first_name ILIKE '%${search}%'
    OR last_name ILIKE '%${search}%'
    OR contact ILIKE '%${search}%'
    `
    const results = await fetch(query)
    if(results){
        res.status(200).json(results)
    } else {
        res.status(404).json({message: "Not Found"})
    }
    
})

app.post('/api/books/search', async (req,res) => {
    const {search} = req.body
    const query = `
    SELECT * FROM books
    WHERE name ILIKE '%${search}%'
    OR date ILIKE '%${search}%'
    OR category ILIKE '%${search}%'
    `
    const results = await fetch(query)
    if(results){
        res.status(200).json(results)
    } else {
        res.status(404).json({message: "Not Found"})
    }
    
})

app.post('/api/films/search', async (req,res) => {
    const {search} = req.body
    const query = `
    SELECT * FROM films
    WHERE name ILIKE '%${search}%'
    OR date ILIKE '%${search}%'
    OR category ILIKE '%${search}%'
    `
    const results = await fetch(query)
    if(results){
        res.status(200).json(results)
    } else {
        res.status(404).json({message: "Not Found"})
    }
    
})


app.listen(8000, () => console.log('http://localhost:8000'))