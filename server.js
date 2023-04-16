//modules and globals
require('dotenv').config
const express = require('express')
const app = express()

//configuration / middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//controllers and routes

//listening for connections
app.listen(process.env.PORT)