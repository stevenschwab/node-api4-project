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

function validateUser(req, res, next) {
    const { username, password } = req.body;
    if (
        !username || 
        typeof username !== 'string' || 
        !username.trim().length 
    ) {
        next({ status: 400, message: "Missing required username field"})
    } else if (
        !password || 
        typeof password !== 'string' || 
        !password.trim().length
    ) {
        next({ status: 400, message: "Missing required password field"})
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
        next({ status: 400, message: "User log in failed" })
    }
}

module.exports = {
    logger,
    validateUser,
    checkUserLogin,
}