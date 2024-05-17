const { users } = require('../users/users-model')

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
    const checkedUser = users.find(u => u.username === username && u.password === password)

    if (checkedUser) {
        next();
    } else {
        next( new CustomError("User log in failed", 400) );
    }
}

module.exports = {
    logger,
    validateUser,
    checkUserLogin,
}