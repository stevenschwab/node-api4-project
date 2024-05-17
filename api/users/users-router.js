const express = require('express')

const Users = require('./users-model')

const router = express.Router()

router.get('/users', (req, res, next) => {
    Users.get()
        .then(users => {
            res.json(users)
        })
        .catch(next)
});

router.post('/register', (req, res, next) => {
    Users.register(req.body)
        .then(() => {
            res.status(201).json(req.body)
        })
        .catch(next)
});

router.post('/login', (req, res, next) => {
    Users.login(req.body)
        .then(() => {
            res.json({
                message: `Welcome to the application ${req.body.username}`
            })
        })
        .catch(next)
})

router.use((error, req, res, next) => { // eslint-disable-line
    res.status(error.status || 500).json({
        message: error.message,
        customMessage: 'Something bad happened in the users-router',
        stack: error.stack,
    })
})

module.exports = router;