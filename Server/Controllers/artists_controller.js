const artists = require("express").Router()
const Artist = require('../Models/artist.js')
const artistSeedData = require('../Seeders/artist_data.js')

//FIND ALL ARTISTS
artists.get('/', async (req, res) => {
    try{
        const foundArtists = await Artist.find().populate('artworks')
        res.json(foundArtists)
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//SEED DATA
//will be removed for final implementation
artists.get('/seed', async (req, res) => {
    try {
        await Artist.insertMany(artistSeedData)
        res.status(201).json({ message: 'Seeded data successfully' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'request failed' })
    }
})

//FIND SPECIFIC ARTIST
artists.get('/:id', async (req, res) => {
    try {
        const foundArtist = await Artist.findById(req.params.id)
            .populate({ path: 'artworks' })
        res.status(200).json(foundArtist)
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//CREATE ARTIST
artists.post('/', async (req, res) => {
    try {
        const newArtist = await Artist.create(req.body)
        res.status(201).json({
            message: 'Successfully insert a new artist',
            data: newArtist
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//UPDATE ARTIST INFORMATION
artists.put('/:id', async (req, res) => {
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json({ 
            message: 'Successfully updated Artist',
            data: updatedArtist
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//DELETE AN ARTIST
artists.delete('/:id', async (req, res) => {
    try {
        const deletedArtist = await Artist.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Successfully deleted artist`,
            data: deletedArtist
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//exports 
module.exports = artists