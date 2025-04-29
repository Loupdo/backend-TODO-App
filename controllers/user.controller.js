const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
// Define the login controller 
const userController = async (req, res) => {
  const { username, password } = req.query;
  const user = await User.findOne({ userName: username });
  //If the user is not found or incorrect password return an error message
  if (!user) {
    return res.status(401).send('Incorrect user credentials');
  }
  if (user.password !== password) {
    return res.status(401).send('Incorrect password');
  }
  // Create a JWT token - payload
  const payload = {
    'name': username,
    'admin': false
  }
  // sign(payload, secretOrPrivateKey, [options, callback])
  const token = jwt.sign(JSON.stringify(payload), "HyperionDev", {
    algorithm: 'HS256'
  });
  //The res.send() function sends a string to the client
  console.log(`User ${user.userName} logged in`)
  res.send({ message: `Welcome back ${user.firstName}`, token: token })
}

//export controller functions to be used on the myLoggerRoute.js/routes
module.exports = { userController }




