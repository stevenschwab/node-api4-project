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