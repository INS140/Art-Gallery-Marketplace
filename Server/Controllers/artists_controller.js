const artists = require("express").Router()
//const db = require('../models')

//FIND ALL ARTISTS
artists.get('/', (req, res) => {
    try{
        res.json({ message: 'Server working'})
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//FIND SPECIFIC ARTIST
artists.get('/:id', (req, res) => {
    try {
        console.log({ message: 'Server working'})
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//CREATE ARTIST
artists.post('/', (req, res) => {
    try {
        res.status(201).json({
            message: 'Successfully insert a new artist'
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//UPDATE ARTIST INFORMATION
artists.put('/:id', (req, res) => {
    try {
        res.status(200).json({ 
            message: 'Successfully updated Artist'
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//DELETE AN ARTIST
artists.delete('/:id', (req, res) => {
    try {
        res.status(200).json({
            message: `Successfully deleted artist(s)`
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//exports 
module.exports = artists