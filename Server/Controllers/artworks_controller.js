const artworks = require("express").Router()
const Artwork = require('../Models/artwork.js')
const artworkSeedData = require('../Seeders/artwork_data.js')

//FIND ALL ARTWORKS
artworks.get('/', async (req, res) => {
    try{
        const foundArtworks = await Artwork.find()
        res.json(foundArtworks)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//SEED DATA
//will be removed for final implementation
artworks.get('/seed', async (req, res) => {
    try {
        await Artwork.insertMany(artworkSeedData)
        res.status(201).json({ message: 'Seeded data successfully' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'request failed' })
    }
})

//FIND SPECIFIC ARTWORKS
artworks.get('/:id', async (req, res) => {
    try {
        const foundArtwork = await Artwork.findById(req.params.id)
        res.status(200).json(foundArtwork)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//CREATE ARTWORKS
artworks.post('/', async (req, res) => {
    try {
        const newArtwork = await Artwork.create(req.body)
        res.status(201).json({
            message: 'Successfully inserted a new artwork',
            data: newArtwork
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//UPDATE ARTWORKS INFORMATION
artworks.put('/:id', async (req, res) => {
    try {
        const updatedArtwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json({ 
            message: 'Successfully updated artwork',
            data: updatedArtwork
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//DELETE AN artworks
artworks.delete('/:id', async (req, res) => {
    try {
        const deletedArtwork = await Artwork.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Successfully deleted artwork(s)`,
            data: deletedArtwork
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//exports 
module.exports = artworks