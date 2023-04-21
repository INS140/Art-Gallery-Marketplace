const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema
const commissionSchema = new Schema({
    artist_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Artwork'
    },
    artwork_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Artist'
    },
    title: String,
    price: Number,
    due_date: Date,
})

// helper methods 
commissionSchema.methods.getCommissiondBy = function() {
    return `Your estimate income is ${this.commission.est_earn}!  since ${this.artist?.startDate()}`
}
  

// model and export 
const Commission = mongoose.model('Commission', commissionSchema)
module.exports = Commission