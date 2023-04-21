const artworks = require("express").Router()
const Artwork = require('../Models/artwork.js')

//FIND ALL ARTWORKS
artworks.get('/', (req, res) => {
    try{
        res.json({ message: 'Server working'})
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//FIND SPECIFIC ARTWORKS
artworks.get('/:id', (req, res) => {
    try {
        console.log({ message: 'Server working'})
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//CREATE ARTWORKS
artworks.post('/', (req, res) => {
    try {
        res.status(201).json({
            message: 'Successfully insert a new artworks'
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//UPDATE ARTWORKS INFORMATION
artworks.put('/:id', (req, res) => {
    try {
        res.status(200).json({ 
            message: 'Successfully updated artworks'
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//DELETE AN artworks
artworks.delete('/:id', (req, res) => {
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
module.exports = artworks