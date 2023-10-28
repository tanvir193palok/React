import { v4 as uuidv4 } from "uuid";

let users = [];

//Gets all the users information
export const getUsers = (req, res) => {
  res.send(users);
};

//Creates user with id
export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);

  res.send(`User with the name ${user.firstName} added to the database`);
};

//Get the specific user by id
export const userById = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

//Deletes user with id
export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with id ${id} deleted from the database`);
};

// Updates specific object property for specific user
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }

  res.send(`User with id ${user.id} has been updated`);
};
