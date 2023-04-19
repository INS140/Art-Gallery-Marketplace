//modules and globals
require('dotenv').config()
const express = require('express')
const app = express()

//configuration / middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//controllers and routes
const artistsController = require('./Controllers/artists_controller')
app.use('/artists', artistsController)

const imagesController = require('./Controllers/images_controller')
app.use('/images', imagesController)

const commissionsController = require('./Controllers/commissions_controller')
app.use('/commissions', commissionsController)

//listening for connections
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})

module.exports = app