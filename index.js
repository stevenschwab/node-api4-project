require('dotenv').config()

const server = require('./api/server')

const port = process.env.PORT || 9000 // eslint-disable-line

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})