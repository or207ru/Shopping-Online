// import
const { Schema, model } = require('mongoose')

// collection structure
const userSchema = new Schema({
    user_id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    city: { type: String, required: true },
    street: { type: String, required: true },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'cart',
    },
})

// build collection
const UserModel = model("user", userSchema)

// export
module.exports = { UserModel }