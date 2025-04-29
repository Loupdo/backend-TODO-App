const userModel = require('../models/user.model');
const User = require('../models/user.model');

// Controller to create a new user
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, userName, password } = req.body

    // Check if the username already exists
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).send({ message: "This username already exist" });
    }
    // Create and save a new user document
    const newUser = new User({
      firstName,
      lastName,
      userName,
      password
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.send('The user has been added');
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Some error occurred while creating the user."
    });
  }
};

// Controller to retrieve todos for a user
exports.findTodos = async (req, res) => {
  try {
    const { name, admin } = req.payload;
    // Find user by username
    const user = await User.findOne({ userName: name });
    if (user) {
      return res.send(user.todos);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Some error occurred while retriving the Todos."
    });
  }
}
// Controller to update todos for a user
exports.updateTodos = async (req, res) => {
  try {
    const { name, admin } = req.payload;
    const update = {
      todos: req.body.todos
    };
    // Find user and update todos
    const updatedUser = await User.findOneAndUpdate({ userName: name }, update, { new: true });
    if (!updatedUser) {
      return res.status(404).send({ message: 'User not found' });
    }
    console.log(`new user todo are ${updatedUser.todos}`)
    res.status(200).send({
      message: "Todos updated successfully",
      todos: updatedUser.todos
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Some error occurred while updating the Todos."
    });
  }
}
