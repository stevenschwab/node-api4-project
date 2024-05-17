const users = [
    { username: 'schwabs', password: 'tester' },
    { username: 'haleyc', password: 'tester' },
    { username: 'olliec', password: 'tester' },
];

module.exports = {
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
    const foundUser = users.find(u => u.username === user.username && u.password === user.password);
    if (foundUser) {
        return Promise.resolve(`Welcome to the application ${foundUser.username}`)
    }
    return Promise.reject(new Error('User not found'));
}