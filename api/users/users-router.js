const express = require('express')
const { validateUser, checkUserLogin, authenticateToken } = require('../middleware/middleware')
const Users = require('./users-model')
const router = express.Router()

router.get('/users', authenticateToken, (req, res, next) => {
    Users.get()
        .then(users => {
            res.json(users)
        })
        .catch(next)
});

router.post('/register', validateUser, (req, res, next) => {
    Users.register(req.body)
        .then(() => {
            res.status(201).json(req.body)
        })
        .catch(next)
});

router.post('/login', validateUser, checkUserLogin, (req, res, next) => {
    Users.login(req.body)
        .then(() => {
            const token = Users.generateToken(req.body.username);
            res.json({
                message: `Welcome to the application ${req.body.username}`,
                token
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