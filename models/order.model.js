// import
const { Schema, model } = require('mongoose')

// collection structure
const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'cart',
        required: true,
    },
    city: { type: String, required: true },
    street: { type: String, required: true },
    ordering_date: { type: Date, default: Date.now },
    shiping_date: { type: Date, default: Date.now },
})

// build collection
const OrderModel = model("order", orderSchema)

// export
module.exports = { OrderModel }