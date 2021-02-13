// imports
const router = require("express").Router()
const { ProductModel } = require('../models/product.model')
const { CategoryModel } = require('../models/category.model')

// get all product of certien category
router.get('/prod/:cat', async (req, res) => {
    try {

        // recived corelate category id
        const cat_id = await CategoryModel.findOne({ category_name: req.params.cat }, { _id: true })

        // get relevant products
        const products = await ProductModel.find({ category: cat_id }).populate('category')
        res.json({ err: false, msg: products })

    } catch (err) {
        res.status(500).json({ err: true, msg: err })
    }
})

// get all category
router.get('/cat', async (req, res) => {
    try {

        // retrive all categories
        const categories = await CategoryModel.find({})
        res.json({ err: false, msg: categories })

    } catch (err) {
        res.status(500).json({ err: true, msg: err })
    }
})

// add new product
router.post('/prod', async (req, res) => {
    try {

        // recived corelate category id
        const cat_id = await CategoryModel.findOne({ category_name: req.body.category }, { _id: true })

        // appending new product to db
        const { name, price, image } = req.body
        const new_product = new ProductModel({ category: cat_id, name, price, image })

        // save and send new product
        const saved_product = await new_product.save()
        res.json({ err: false, msg: saved_product })

    } catch (err) {
        return res.status(500).json({ err: true, msg: err })
    }
})

// add new category
router.post('/cat', async (req, res) => {
    try {

        // appending new category to db
        const new_category = new CategoryModel(req.body)

        // save and send new category
        const saved_category = await new_category.save()
        res.json({ err: false, msg: saved_category })

    } catch (err) {
        return res.status(500).json({ err: true, msg: err })
    }
})

// update product
router.put('/prod', async (req, res) => {
    try {

        // updating given prod
        const prod_to_update = await ProductModel.updateOne({ _id: req.body._id }, { $set: { ...req.body } })
        res.json({ err: false, msg: prod_to_update })

    } catch (err) {
        return res.status(500).json({ err: true, msg: err })
    }
})

module.exports = router