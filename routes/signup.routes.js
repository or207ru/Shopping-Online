// imports
const router = require("express").Router()
const { UserModel } = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

// handling new registration. restricting duplicate email for users
router.post('/register', async (req, res) => {
    try {

        // create hash password
        const hash = await bcrypt.hash(req.body.password, 10)

        // appending new user to db
        const new_user = new UserModel(req.body)
        new_user.password = hash
        
        // handle admin registering
        if (req.body.admin_pass == process.env.ADMIN_PASS)
            new_user.role = "admin"

        // save and send new user
        const saved_user = await new_user.save()
        res.json({ err: false, msg: saved_user })

    } catch (err) {
        return res.status(500).json({ err: true, msg: err })
    }
})

// handeling login and provided token
router.post('/login', async (req, res) => {
    try {

        // recive info from the body
        const { email, password } = req.body
        if (!email || !password)
            return res.status(400).json({ err: true, msg: 'missing some info' })

        // cheking authentication
        const candidate = await UserModel.findOne({ email: email })
        if (!candidate) {
            throw new Error("no such email")
        } else {
            const didPass = await bcrypt.compare(password, candidate.password)
            if (!didPass) {
                throw new Error("wrong password")
            } else {
                const token = jwt.sign(
                    // create token for 10 houers validity
                    {
                        ...candidate,
                        password: "how much you pay for it?",
                        exp: Math.floor(Date.now() / 1000) + (10 * 60 * 60)
                    }, process.env.TOKEN_SECRET)
                return res.json({ err: false, token })
            }
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json(({ err: true, msg: err }))
    }
})

module.exports = router