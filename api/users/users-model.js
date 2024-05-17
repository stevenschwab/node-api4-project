const bcrypt = require('bcryptjs');

const users = [
    { username: 'schwabs', password: bcrypt.hashSync('tester', 8) },
    { username: 'haleyc', password: bcrypt.hashSync('tester', 8) },
    { username: 'olliec', password: bcrypt.hashSync('tester', 8) },
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
    const hashedPassword = bcrypt.hashSync(user.password, 8);
    const newUser = { ...user, password: hashedPassword };
    users.push(newUser);
    return Promise.resolve(newUser);
}

function login(user) {
    return Promise.resolve(user);
}