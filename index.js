const express = require("express");
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//routes function
const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/secure/registerRoute');
const todosRoutes = require('./routes/secure/todosRoutes');

//database management
const uri = process.env.MONGODB_URI;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


// Create an instance of the express server​
const app = express();

// Connect to the database
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => { console.log('Successfully connected to the database!') },
  err => { console.log('Could not connect to the database...' + err) }
);

// Allow app to accept json and url encoded values
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable Cross-Origin Resource Sharing​
app.use(cors());

//Setup routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute)
app.use('/api/login/todos', todosRoutes);


// Start the server​
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});