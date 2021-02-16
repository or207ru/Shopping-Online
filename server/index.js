// עצרתי ב13.07.20 ב2:53 - התחיל ראוטים של מוצרים

// import
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const users = require('./routes/signup.routes')
const products = require('./routes/product.routes')
const orders = require('./routes/order.routes')
const { connect_to_mongo } = require('./config/db')

// setup
const app = express()
dotenv.config()

// middlewere
app.use(cors())
app.use(express.json())
app.use('/api/signup', users)
app.use('/api/product', products)
app.use('/api/order', orders)

// run server and db
app.listen(1000, () => {
    connect_to_mongo()
    console.log(`connected to port 1000`)
})
