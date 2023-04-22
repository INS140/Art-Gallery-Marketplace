const commissions = require("express").Router()
const Commission = require('../Models/commission.js')
const commissionSeedData = require('../Seeders/commission_data.js')

//FIND ALL COMMISSIONS
commissions.get('/', async (req, res) => {
    try{
        const foundCommissions = await commissions.find().populate('commissions')
        res.json(foundCommissions)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//SEED DATA
//will be removed for final implementation
commissions.get('/seed', async (req, res) => {
    try {
        await Commission.insertMany(commissionSeedData)
        res.status(201).json({ message: 'Seeded data successfully' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'request failed' })
    }
})

//FIND SPECIFIC COMMISSIONS
commissions.get('/:id', async (req, res) => {
    try {
        const foundCommissions = await Commission.findById(req.params.id)
        .populate({ path: 'commissions'})
        res.status(200).json(foundCommissions)
        console.log({ message: 'Server working'})
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//CREATE COMMISSIONS
commissions.post('/', async (req, res) => {
    try {
        const newCommission = await Commission.create(req.body)
        res.status(201).json({
            message: 'Successfully insert a new commissions',
            data: newCommission
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//UPDATE COMMISSIONS INFORMATION
commissions.put('/:id', async (req, res) => {
    try {
        const updatedCommission = await Commission.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json({ 
            message: 'Successfully updated commissions',
            data: updatedCommission
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//DELETE AN COMMISSIONS
commissions.delete('/:id', async (req, res) => {
    try {
        const deletedCommission = await Commission.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Successfully deleted commission(s)`,
            data: deletedCommission
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//exports 
module.exports = commissions