// import
const { Schema, model } = require('mongoose')

// collection structure
const categorySchema = new Schema({
    category_name: { type: String, required: true }
})

// build collection
const CategoryModel = model("category", categorySchema)

// export
module.exports = { CategoryModel }