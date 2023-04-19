const commissions = require("express").Router()
//const db = require('../models')

//FIND ALL COMMISSIONS
commissions.get('/', (req, res) => {
    try{
        console.log({ message: 'Server working'})
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//FIND SPECIFIC COMMISSIONS
commissions.get('/:id', (req, res) => {
    try {
        console.log({ message: 'Server working'})
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//CREATE COMMISSIONS
commissions.post('/', (req, res) => {
    try {
        res.status(201).json({
            message: 'Successfully insert a new commissions'
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//UPDATE COMMISSIONS INFORMATION
commissions.put('/:id', (req, res) => {
    try {
        res.status(200).json({ 
            message: 'Successfully updated commissions'
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//DELETE AN COMMISSIONS
commissions.delete('/:id', (req, res) => {
    try {
        res.status(200).json({
            message: `Successfully deleted commission(s)`
        })
    }
    catch {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//exports 
module.exports = commissions