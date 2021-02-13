// import
const { Schema, model } = require('mongoose')

// collection structure
const productSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true,
    },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
})

// build collection
const ProductModel = model("product", productSchema)

// export
module.exports = { ProductModel }