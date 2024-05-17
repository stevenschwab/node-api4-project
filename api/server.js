const express = require('express')
const { logger } = require('./middleware/middleware')
const usersRouter = require('../api/users/users-router')

const server = express()

server.use(express.json())
server.use(logger)

server.use('/api', usersRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Let's write an API!</h2>`)
})

module.exports = server;