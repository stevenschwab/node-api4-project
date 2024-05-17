const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = [
    { username: 'schwabs', password: bcrypt.hashSync('tester', 8) },
    { username: 'haleyc', password: bcrypt.hashSync('tester', 8) },
    { username: 'olliec', password: bcrypt.hashSync('tester', 8) },
];

const secret = process.env.JWT_SECRET; // eslint-disable-line

module.exports = {
    users,
    get,
    register,
    login,
    generateToken,
};

function get() {
    const usersWithoutPasswords = users.map(({ username }) => ({ username }));
    return Promise.resolve(usersWithoutPasswords);
}

function register(user) {
    const hashedPassword = bcrypt.hashSync(user.password, 8);
    const newUser = { ...user, password: hashedPassword };
    users.push(newUser);
    return Promise.resolve(newUser);
}

function login(user) {
    return Promise.resolve(user);
}

function generateToken(user) {
    const payload = {
        username: user.username,
    };
    const options = {
        expiresIn: '1h',
    };
    return jwt.sign(payload, secret, options);
}