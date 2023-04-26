const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema
const commissionSchema = new Schema({
  name: { type: String, required: true },
  artist: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Artwork'
  },
  description: { type: String, required: true },
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