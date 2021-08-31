// BUILD YOUR SERVER HERE
const express = require('express');
const User = require('./users/model');
const server = express();
server.use(express.json());

// .post()

server.post('/api/users', (req, res) => {
  const user = req.body;
  if(!user.name || !user.bio) {
    res.status(400).json({
      message: 'Please provide name and bio for the user',
    })
  } else {
    User.insert(user)
      .then(createdUser => {
        res.status(201).json(createdUser)
      })
      .catch(err => {
        res.status(500).json({
          message: 'There was an error while saving the user to the database',
          err: err.message,
          stack: err.stack,
        })
      })
  }
})

// .get()

server.get('/api/users', (req, res) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).json({
        message: 'The users information could not be retrieved',
        err: err.message,
        stack: err.stack,
      })
    })
})

// .use()

server.use('*', (req, res) => {
  res.status(404).json({
    message: 'nothing was found'
  })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
