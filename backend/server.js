const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db')

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)
// app.post('/api/register', async (req, res) => {
//     console.log(req.body)
//     req.json({ status: 'ok' })
// })

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})