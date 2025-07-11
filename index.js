const express = require('express');
const User = require('./models/user.model')
const jwt = require('jsonwebtoken');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000
const MONGO = process.env.MONGODB;

console.log (`MONGO: ${MONGO}`)

app.use(express.json())

mongoose.connect(`${MONGO}mongoosetest`)
const db = mongoose.connection
db.once("open", () => {
    console.log(`connected: ${MONGO}`)
})

const validateSession = async (req, res, next) => {
try {
    const token = req.headers.authorization
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decodeToken.id)

    if (!user) throw new Error("User not found");
    req.user = user;
    return next();
}
catch (error){
    res.json({
        error: "Unauthorized access"
    })

}
}

app.get ('/api/health', (req, res) => {
    res.json ({status: 'ok'})
})

app.get("/api/public", (req, res) => {
    res.json({
        message: "This is a public route. No authentication required"
    })
})
