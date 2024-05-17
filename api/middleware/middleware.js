const jwt = require('jsonwebtoken');
const { users, secret } = require('../users/users-model');
const bcrypt = require('bcryptjs');

function logger(req, res, next) {
    const date = new Date();
    console.log(`
        REQUEST METHOD: ${req.method}
        REQUEST URL: ${req.originalUrl}
        TIMESTAMP; ${date.toLocaleString()}
    `);
    next();
};

class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

function validateUser(req, res, next) {
    const { username, password } = req.body;
    if (
        !username || 
        typeof username !== 'string' || 
        !username.trim().length 
    ) {
        next( new CustomError("Missing required username field", 400) );
    } else if (
        !password || 
        typeof password !== 'string' || 
        !password.trim().length
    ) {
        next( new CustomError("Missing required password field", 400) );
    } else {
        req.username = username.trim()
        req.password = password.trim()
        next();
    }
}

function checkUserLogin(req, res, next) {
    const { username, password } = req.body;
    const checkedUser = users.find(u => {
        return u.username === username && bcrypt.compareSync(password, u.password);
    })

    if (checkedUser) {
        next();
    } else {
        next( new CustomError("User log in failed", 400) );
    }
}

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (token == null) {
        next( new CustomError("User unauthorized", 401) );
    }

    jwt.verify(token, secret, (err, user) => {
        if (err) {
            next( new CustomError("Session timed out", 403) );
        }

        req.user = user;
        next();
    })
}

module.exports = {
    logger,
    validateUser,
    checkUserLogin,
    authenticateToken,
}