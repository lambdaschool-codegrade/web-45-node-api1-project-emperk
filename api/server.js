// BUILD YOUR SERVER HERE
const express = require('express');
const server = express();
server.use(express.json());

//.post()



// .use()

server.use('*', (req, res) => {
  res.status(404).json({
    message: 'nothing was found'
  })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
