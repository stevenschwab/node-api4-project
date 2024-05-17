const bcrypt = require('bcryptjs');

const users = [
    { username: 'schwabs', password: 'tester' },
    { username: 'haleyc', password: 'tester' },
    { username: 'olliec', password: 'tester' },
];

module.exports = {
    users,
    get,
    register,
    login,
};

function get() {
    return Promise.resolve(users);
}

function register(user) {
    users.push(user);
    return Promise.resolve(user);
}

function login(user) {
    return Promise.resolve(user);
}