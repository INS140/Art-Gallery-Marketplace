const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema
const commissionSchema = new Schema({
    id: { type: String, required: true },
    artist_id: { type: String },
    title: { type: String },
    price: { type: Number },
    est_earn: { type: text },
    due_date: { type: Date },
    total_paid:{ type: text },
})

// helper methods 
commissionSchema.methods.getCommissiondBy = function() {
    return `Your estimate income is ${this.commission.est_earn}!  since ${this.artist?.startDate()}`
}
  

// model and export 
const Commission = mongoose.model('Commission', commissionSchema)
module.exports = Commission