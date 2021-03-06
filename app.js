'use strict'
const path = require('path')
const express = require('express')
const app = express()

// loading body-parser
const bodyParser = require('body-parser')

// Loading routes
const mainRouter = require('./routes/mainRoutes.js')
const appConstants = require('./appConstants')

// Configuring body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Configuring the routes
app.use('/', mainRouter)

// serving static files
app.use('/cdn', express.static('public'))

app.listen(appConstants.APP_PORT)
console.log(`Express server running on port ${appConstants.APP_PORT}`)