//modules and globals
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//configuration and middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
mongoose.set({strictQuery: true})
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

//controllers and routes
const artistsController = require('./Controllers/artists_controller')
app.use('/artists', artistsController)

const imagesController = require('./Controllers/images_controller')
app.use('/images', imagesController)

const commissionsController = require('./Controllers/commissions_controller')
app.use('/commissions', commissionsController)

//listening for connections
app.listen(PORT, () => {
    console.log(`🎸 Rockin' on port: ${PORT} and ${MONGO_URI}`)
})