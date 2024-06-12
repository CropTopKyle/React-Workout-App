require('dotenv').config()


// package reference name = require('package-name')
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// Express App
const app = express();


// Middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// Routes imported from /routes/workouts.js
app.use('/api/workouts', workoutRoutes)

// Connect to Database
mongoose.connect(process.env.MONG_URI)
    .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
    console.log("Connected to the Database and Listening on Port 4000")
        })
    })
    .catch((error) => {
        console.log(error)
    })