const images = require("express").Router()
//const db = require('../models')

//FIND ALL IMAGES
images.get('/', (req, res) => {
    try{
        console.log({ message: 'Server working'})
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//FIND SPECIFIC IMAGES
images.get('/:id', (req, res) => {
    try {
        console.log({ message: 'Server working'})
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//CREATE IMAGES
images.post('/', (req, res) => {
    try {
        res.status(201).json({
            message: 'Successfully insert a new images'
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//UPDATE IMAGES INFORMATION
images.put('/:id', (req, res) => {
    try {
        res.status(200).json({ 
            message: 'Successfully updated images'
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//DELETE AN IMAGES
images.delete('/:id', (req, res) => {
    try {
        res.status(200).json({
            message: `Successfully deleted image(s)`
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//exports 
module.exports = images