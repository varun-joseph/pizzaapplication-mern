const express = require('express')
const app = express()
const db = require('./db')
const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')

app.use(express.json())
const port = process.env.PORT || 5000

app.use('/api/pizzas', pizzasRoute)
app.use('/api/users', userRoute)
app.get('/', (req, res) => res.send('welcome to pizza app..!'))

app.listen(port, () => `app listening on port port! ${port}`)
