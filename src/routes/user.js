const express = require("express");

const UserController = require("../controller/user.js");

const route = express.Router();

// CREATE - POST
route.post("/", UserController.createNewUser);

// READ DATA BY ID
route.get("/:id", UserController.getUserById);
// READ - DATA
route.get("/", UserController.getAllUser);

// UPDATE - DATA
route.patch("/:id", UserController.updateUser);

//DELETE - DATA
route.delete("/:id", UserController.deleteUser);
module.exports = route;
