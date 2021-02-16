// imports
const router = require("express").Router()
const { UserModel } = require('../models/user.model')
const { CategoryModel } = require('../models/category.model')
const { ProductModel } = require('../models/product.model')
const { CartModel } = require('../models/cart.model')
const { OrderModel } = require('../models/order.model')

// get cart by id
router.get('/cart/:cart_id', async (req, res) => {
    try {

        // get certein cart
        const cart = await CartModel.find({ _id: cart_id })
        res.json({ err: false, msg: cart })

    } catch (err) {
        res.status(500).json({ err: true, msg: err })
    }
})

// get order by id
router.get('/order/:order_id', async (req, res) => {
    try {

        // get certein order
        const order = await OrderModel.find({ _id: order_id })
        res.json({ err: false, msg: order })

    } catch (err) {
        res.status(500).json({ err: true, msg: err })
    }
})

module.exports = router