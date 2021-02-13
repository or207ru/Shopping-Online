// import
const { Schema, model } = require('mongoose')

// collection structure
const cartSchema = new Schema({
    date: { type: Date, default: Date.now },
    item: [{
        product: {
            type: Scema.Types.ObjectId,
            ref: 'product',
        },
        amount: Number,
    }],
    completed: { type: Boolean, default: false }
})

// build collection
const CartModel = model("cart", cartSchema)

// export
module.exports = { CartModel }